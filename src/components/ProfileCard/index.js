import React from "react";
import { Row, Col } from "antd";

import { getStaticImage } from "../../utils";

import { Card, Name, BreedAndAge, BreedInfoIcon, CardLabel, CardLabelDivider, CardValue, CoverImage } from "./styles";

//A Component for cards that shows the info about candidate dogs.
function ProfileCard({ dog }) {
  return (
    <Card style={{ width: 320 }} cover={<CoverImage alt="example" src={getStaticImage(dog.profilePic)} />}>
      <Name>{dog.name}</Name>

      <Row type="flex" justify="space-between">
        <Col>
          <BreedAndAge>{dog.breed}</BreedAndAge>
          <BreedInfoIcon type="info-circle" theme="filled" />
        </Col>

        <Col>
          <BreedAndAge>{dog.age}</BreedAndAge>
        </Col>
      </Row>

      <CardLabel>Self Summary</CardLabel>
      <CardLabelDivider />
      <CardValue>{dog.selfSummary}</CardValue>
    </Card>
  );
}

export default ProfileCard;
