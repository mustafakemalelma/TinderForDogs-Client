import React from "react";

import { Sider, Name, SiderActionButton, InfoLabel, InfoLabelDivider, InfoValue, ProfileImage } from "./styles";
import { Col, Row, Icon } from "antd";

function LeftSider() {
  return (
    <Sider width={280}>
      <ProfileImage size={142} src="https://picsum.photos/142/142" alt="profile-pic" />

      <Name>Mapple</Name>
      <SiderActionButton icon="edit" type="dashed" ghost block>
        Edit Profile
      </SiderActionButton>
      <SiderActionButton icon="logout" type="dashed" ghost block>
        Sign out
      </SiderActionButton>

      <InfoLabelDivider />
      <InfoLabel>Self Summary</InfoLabel>
      <InfoValue>hav hav ...</InfoValue>

      <InfoLabel>Breed</InfoLabel>
      <Row type="flex" justify="space-between">
        <Col>
          <InfoValue>Golden</InfoValue>
        </Col>

        <Col>
          <Icon type="info-circle" theme="filled" />
        </Col>
      </Row>

      <InfoLabel>Age</InfoLabel>
      <InfoValue>8 years old</InfoValue>

      <InfoLabel>Size</InfoLabel>
      <InfoValue>110 cm</InfoValue>

      <InfoLabel>Weight</InfoLabel>
      <InfoValue>20 kg</InfoValue>

      <InfoLabel>Address</InfoLabel>
      <InfoValue>Etiler / Beşiktaş</InfoValue>
    </Sider>
  );
}

export default LeftSider;
