import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Col, Row, Icon, message } from "antd";
import { useHistory } from "react-router-dom";

import { GET_ME } from "../../graphql/queries";
import { INVALIDATE_TOKEN } from "../../graphql/mutations";
import { getStaticImage } from "../../utils";

import { Sider, Name, SiderActionButton, InfoLabel, InfoLabelDivider, InfoValue, ProfileImage } from "./styles";

function LeftSider() {
  //Getting the browser history
  const history = useHistory();

  //Make a get me request
  const { error, data } = useQuery(GET_ME, { fetchPolicy: "network-only" });

  //Gets the function and objects for making a logout request later.
  const [trySignOut, { data: signoutData, error: signoutError, loading: signoutLoading, client }] = useMutation(
    INVALIDATE_TOKEN
  );

  //Logout response handling
  useEffect(() => {
    if (signoutError) message.error(signoutError.message);
    else if (signoutData && signoutData.invalidateTokens) {
      //if successfully loged out then clear the local cache.
      client.clearStore().then(() => history.push("/login"));
    }
  }, [client, history, signoutError, signoutData]);

  //If there is an error when making a get me request, show it.
  useEffect(() => {
    if (error) message.error(error.message);
  }, [error]);

  return (
    <Sider width={280}>
      <ProfileImage size={142} src={data ? getStaticImage(data.me.profilePic) : ""} alt="profile-pic" />

      <Name>{data ? data.me.name : ""}</Name>
      <SiderActionButton icon="edit" type="dashed" ghost block>
        Edit Profile
      </SiderActionButton>
      <SiderActionButton icon="logout" type="dashed" ghost block loading={signoutLoading} onClick={trySignOut}>
        Sign out
      </SiderActionButton>

      <InfoLabelDivider />
      <InfoLabel>Self Summary</InfoLabel>
      <InfoValue>{data ? data.me.selfSummary : ""}</InfoValue>

      <InfoLabel>Breed</InfoLabel>
      <Row type="flex" justify="space-between">
        <Col>
          <InfoValue>{data ? data.me.breed : ""}</InfoValue>
        </Col>

        <Col>
          <Icon type="info-circle" theme="filled" />
        </Col>
      </Row>

      <InfoLabel>Age</InfoLabel>
      <InfoValue>{data ? data.me.age : ""}</InfoValue>

      <InfoLabel>Size</InfoLabel>
      <InfoValue>{data ? data.me.size : ""}</InfoValue>

      <InfoLabel>Weight</InfoLabel>
      <InfoValue>{data ? data.me.weight : ""}</InfoValue>

      <InfoLabel>Address</InfoLabel>
      <InfoValue>{data ? data.me.address : ""}</InfoValue>
    </Sider>
  );
}

export default LeftSider;
