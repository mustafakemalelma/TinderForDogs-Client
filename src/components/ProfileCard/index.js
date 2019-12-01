import React from "react";

import { Card, Name, BreedAndAge, BreedInfoIcon, CardLabel, CardLabelDivider, CardValue } from "./styles";
import { Row, Col } from "antd";

function ProfileCard() {
  return (
    <Card style={{ width: 320 }} cover={<img alt="example" src="https://picsum.photos/320/400" />}>
      <Name>Mapple</Name>

      <Row type="flex" justify="space-between">
        <Col>
          <BreedAndAge>Golden</BreedAndAge>
          <BreedInfoIcon type="info-circle" theme="filled" />
        </Col>

        <Col>
          <BreedAndAge>8 years old</BreedAndAge>
        </Col>
      </Row>

      <CardLabel>Self Summary</CardLabel>
      <CardLabelDivider />
      <CardValue>hey boomersss whassupp !!</CardValue>
    </Card>
  );
}

export default ProfileCard;
