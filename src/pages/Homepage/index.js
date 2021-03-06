import React, { useState, useEffect, useCallback } from "react";
import { Col, Spin, message, Icon, Modal } from "antd";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";

import ProfileCard from "../../components/ProfileCard";
import MatchActionButton from "../../components/MatchActionButton";
import { getStaticImage } from "../../utils";
import { GET_LOGGED_IN, GET_CANDIDATES, GET_ME } from "../../graphql/queries";
import { LIKE_DOG, DISLIKE_DOG } from "../../graphql/mutations";

import {
  HomepageContainer,
  ActionsContainer,
  NoDogsLeftText,
  MatchModalContainer,
  MatchImage,
  MatchImageContainer,
  MatchText
} from "./styles";

function Homepage() {
  //Get the is user logged in info from the local cache.
  const {
    data: { auth }
  } = useQuery(GET_LOGGED_IN);

  //Make a get me request
  const { data: meData } = useQuery(GET_ME);
  //Make a get candidates request
  const { data: candidatesData, loading: candidatesLoading } = useQuery(GET_CANDIDATES);

  //Get the functions and objects for making a like request later.
  const [tryLike, { data: likeData, loading: likeLoading, error: likeError }] = useMutation(LIKE_DOG, {
    refetchQueries: ["candidateDogs"]
  });

  //Get the functions and objects for making a dislike request later.
  const [tryDislike, { data: dislikeData, loading: dislikeLoading, error: dislikeError }] = useMutation(DISLIKE_DOG, {
    refetchQueries: ["candidateDogs"]
  });

  const [lastLikedDog, setLastLikedDog] = useState(null);
  const [candidateDogs, setCandidateDogs] = useState([]);
  useEffect(() => {
    if (candidatesData && candidatesData.candidateDogs) setCandidateDogs(candidatesData.candidateDogs);
  }, [candidatesData]);

  //This functions make a like dog request to api.
  const likeDog = useCallback(() => {
    const dog = candidateDogs[0];
    setLastLikedDog(dog);
    tryLike({ variables: { likedId: dog.id } });
  }, [candidateDogs, tryLike]);

  //This is checking if liking is successfull or not.
  //It also check if a match happened, if there is a match
  // then it shows a modal
  useEffect(() => {
    if (likeData && likeData.like) {
      const { isAMatch } = likeData.like;
      if (isAMatch) {
        Modal.success({
          content: (
            <MatchModalContainer>
              <MatchImageContainer>
                <MatchImage right={-32} size={200} src={getStaticImage(lastLikedDog.profilePic)} />
                <MatchImage left={-32} size={200} src={getStaticImage(meData.me.profilePic)} />
              </MatchImageContainer>

              <MatchText>It is a match!</MatchText>
            </MatchModalContainer>
          ),
          width: 500,
          okButtonProps: { type: "danger" },
          icon: null
        });
      }
    }
    if (likeError) message.error("Something went wrong!");
  }, [likeData, likeError, meData, lastLikedDog]);

  //This function makes a dislike request to api.
  const dislikeDog = useCallback(() => {
    const dog = candidateDogs[0];
    tryDislike({ variables: { dislikedId: dog.id } });
  }, [candidateDogs, tryDislike]);

  //This functions check if there is any error happened when disliking.
  useEffect(() => {
    if (dislikeError) message.error("Something went wrong!");
  }, [dislikeData, dislikeError]);

  if (!auth.loggedIn) return <Redirect to="/login" />;
  if (candidatesLoading || likeLoading || dislikeLoading)
    return (
      <HomepageContainer>
        <Spin size="large" />
      </HomepageContainer>
    );
  if (candidateDogs.length === 0)
    return (
      <HomepageContainer>
        <NoDogsLeftText>
          Wow, you are fast!
          <br />
          <Icon type="smile" /> There are no dogs left... <Icon type="smile" />
        </NoDogsLeftText>
      </HomepageContainer>
    );

  return (
    <HomepageContainer>
      <ProfileCard key={candidateDogs[0].id} dog={candidateDogs[0]} />

      <ActionsContainer type="flex" justify="space-around">
        <Col>
          <MatchActionButton title="Dislike" icon="dislike" background="#FFB800" onClick={dislikeDog} />
        </Col>
        <Col>
          <MatchActionButton title="Like" icon="star" background="#FF0000" onClick={likeDog} />
        </Col>
      </ActionsContainer>
    </HomepageContainer>
  );
}

export default Homepage;
