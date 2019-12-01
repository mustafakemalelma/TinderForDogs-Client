import React from "react";
import { Col } from "antd";
import { useQuery } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";

import ProfileCard from "../../components/ProfileCard";
import MatchActionButton from "../../components/MatchActionButton";
import { GET_LOGGED_IN } from "../../graphql/queries";

import { HomepageContainer, ActionsContainer } from "./styles";

function Homepage() {
  const {
    data: { auth }
  } = useQuery(GET_LOGGED_IN);
  if (!auth.loggedIn) return <Redirect to="/login" />;

  return (
    <HomepageContainer>
      <ProfileCard />

      <ActionsContainer type="flex" justify="space-around">
        <Col>
          <MatchActionButton title="Dislike" icon="dislike" background="#FFB800" />
        </Col>
        <Col>
          <MatchActionButton title="Like" icon="star" background="#FF0000" />
        </Col>
      </ActionsContainer>
    </HomepageContainer>
  );
}

export default Homepage;
