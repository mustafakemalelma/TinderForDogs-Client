import React, { useState, useEffect, useCallback } from "react";
import { Form, Row, Select, Col, message, Upload, Icon, Button } from "antd";
import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

import AUTH_BG from "../../assets/authbg.png";
import AuthInput from "../../components/AuthInput";
import AuthTextArea from "../../components/AuthTextArea";
import { hasErrors } from "../../utils";
import { fetchBreeds } from "../../services/thedogapi";
import { REGISTER_DOG } from "../../graphql/mutations";
import { LOGIN_QUERY } from "../../graphql/queries";

import {
  RegisterContainer,
  LeftCol,
  BottomDogImage,
  RightCol,
  Logo,
  SubTitle,
  LoginButton,
  LogoContainer,
  FormContainer
} from "./styles";
import AuthSelectBox from "../../components/AuthSelectBox";

const { Option } = Select;

function Register({ form }) {
  const { getFieldDecorator, getFieldsError, validateFields, getFieldsValue } = form;

  const history = useHistory();

  const [breeds, setBreeds] = useState([]);

  const [tryRegister, { data: registerDogData, error: registerDogError, loading: registerDogLoading }] = useMutation(
    REGISTER_DOG
  );
  const [tryLogin, { data: loginDogData, loading: loginDogLoading, error: loginDogError, client }] = useLazyQuery(
    LOGIN_QUERY
  );

  useEffect(() => {
    const getBreeds = async () => {
      try {
        const response = await fetchBreeds();
        setBreeds(response);
      } catch (error) {
        message.error("Could not fetch dog breeds");
      }
    };

    getBreeds();
  }, []);

  const handleRegister = useCallback(
    e => {
      e.preventDefault();

      validateFields((err, values) => {
        if (!err) {
          const variables = {
            ...values,
            weight: parseInt(values.weight, 10),
            profilePic: values.profilePic[0].originFileObj
          };

          tryRegister({ variables });
        }
      });
    },
    [validateFields, tryRegister]
  );

  useEffect(() => {
    if (registerDogError) message.error(registerDogError.message);
    else if (registerDogData) {
      const variables = getFieldsValue(["email", "password"]);
      tryLogin({ variables });
    }
  }, [registerDogData, registerDogError, getFieldsValue, tryLogin]);

  useEffect(() => {
    if (loginDogError) message.error(loginDogError.message);
    else if (loginDogData) {
      client.writeData({ data: { auth: { __typename: "Auth", loggedIn: true } } });
      history.push("/homepage");
    }
  }, [loginDogData, loginDogError, history, client]);

  const normFile = useCallback(e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }, []);

  return (
    <RegisterContainer type="flex">
      <LeftCol span={12}>
        <LogoContainer>
          <Logo>tinder</Logo>
          <SubTitle>for dogs</SubTitle>
        </LogoContainer>

        <BottomDogImage src={AUTH_BG} alt="dogs register background" />
      </LeftCol>

      <RightCol span={12}>
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
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "Please enter a name" }]
            })(<AuthInput icon="user" placeholder="Name" />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("selfSummary")(<AuthTextArea rows={3} placeholder="Tell about yourself..." />)}
          </Form.Item>

          <Row type="flex" align="bottom" gutter={24}>
            <Col span={12}>
              <Form.Item>
                {getFieldDecorator("breed", {
                  rules: [{ required: true, message: "Please select a breed!" }]
                })(
                  <AuthSelectBox placeholder="Please select a breed">
                    {breeds.map(el => (
                      <Option value={el.name} key={`${el.name}-${el.id}`}>
                        {el.name}
                      </Option>
                    ))}
                  </AuthSelectBox>
                )}
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item>
                {getFieldDecorator("age", {
                  rules: [{ required: true, message: "Please enter the age" }]
                })(<AuthInput icon="hourglass" placeholder="Age" />)}
              </Form.Item>
            </Col>
          </Row>

          <Row type="flex" align="bottom" gutter={24}>
            <Col span={12}>
              <Form.Item>
                {getFieldDecorator("size", {
                  rules: [{ required: true, message: "Please enter the size" }]
                })(<AuthInput icon="heat-map" placeholder="Size" />)}
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item>
                {getFieldDecorator("weight", {
                  rules: [{ required: true, message: "Please enter the weight" }]
                })(<AuthInput icon="box-plot" placeholder="Weight" type="number" />)}
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            {getFieldDecorator("address")(<AuthTextArea rows={3} placeholder="Give us an address..." />)}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("profilePic", {
              valuePropName: "fileList",
              getValueFromEvent: normFile,
              rules: [{ required: true, message: "You must have at leash 1 photo" }]
            })(
              <Upload name="profilepic" accept="image/*" listType="picture" beforeUpload={() => false} multiple={false}>
                <Button>
                  <Icon type="upload" /> Click to upload a profile picture
                </Button>
              </Upload>
            )}
          </Form.Item>

          <Form.Item>
            <LoginButton
              size="large"
              type="primary"
              onClick={handleRegister}
              loading={registerDogLoading || loginDogLoading}
              disabled={hasErrors(getFieldsError())}
            >
              Go
            </LoginButton>
          </Form.Item>
        </FormContainer>
      </RightCol>
    </RegisterContainer>
  );
}

export default Form.create("registerForm")(Register);
