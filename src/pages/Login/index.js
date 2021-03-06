import React, { useCallback, useEffect } from "react";
import { Form, message } from "antd";
import { useHistory } from "react-router-dom";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";

import AUTH_BG from "../../assets/authbg.png";
import AuthInput from "../../components/AuthInput";
import { hasErrors } from "../../utils";
import { LOGIN_QUERY, GET_LOGGED_IN } from "../../graphql/queries";

import {
  LoginContainer,
  LeftCol,
  BottomDogImage,
  RightCol,
  Logo,
  SubTitle,
  LoginButton,
  FormContainer
} from "./styles";

function Login({ form }) {
  const { getFieldDecorator, validateFields, getFieldsError } = form;

  //Get the browser history
  const history = useHistory();

  //Is user logged in, get it from local cache.
  const {
    data: { auth }
  } = useQuery(GET_LOGGED_IN);
  if (auth.loggedIn) {
    history.push("/homepage");
  }

  //Gets the functions and objects for making login request later.
  const [tryLogin, { loading, error, data, client }] = useLazyQuery(LOGIN_QUERY);

  //Make a login request to api.
  const handleLogin = useCallback(
    e => {
      e.preventDefault();
      validateFields((err, values) => {
        if (!err) {
          tryLogin({ variables: values });
        }
      });
    },
    [validateFields, tryLogin]
  );

  //Login response handling
  useEffect(() => {
    if (error) message.error(error.message);
    else if (data && data.loginDog) {
      //Tell local cache that  user logged in.
      client.writeData({ data: { auth: { __typename: "Auth", loggedIn: true } } });
      history.push("/homepage");
    }
  }, [error, data, history, client]);

  return (
    <LoginContainer type="flex">
      <LeftCol span={12}>
        <BottomDogImage src={AUTH_BG} alt="dogs login background" />
      </LeftCol>

      <RightCol span={12}>
        <Logo>tinder</Logo>
        <SubTitle>for dogs</SubTitle>

        <FormContainer>
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [{ required: true, type: "email", message: "Please enter a valid email!" }]
            })(<AuthInput icon="mail" placeholder="Email" />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please enter a valid password!" }]
            })(<AuthInput icon="unlock" placeholder="Password" type="password" />)}
          </Form.Item>

          <Form.Item>
            <LoginButton
              size="large"
              type="primary"
              onClick={handleLogin}
              loading={loading}
              disabled={hasErrors(getFieldsError())}
            >
              Go
            </LoginButton>

            <a href="/register">Register</a>
          </Form.Item>
        </FormContainer>
      </RightCol>
    </LoginContainer>
  );
}

export default Form.create("loginForm")(Login);
