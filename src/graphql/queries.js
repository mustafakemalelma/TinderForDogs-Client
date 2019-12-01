import gql from "graphql-tag";

export const GET_LOGGED_IN = gql`
  {
    auth @client {
      loggedIn
    }
  }
`;

export const GET_ME = gql`
  {
    me {
      profilePic
      name
      selfSummary
      breed
      age
      size
      weight
      address
    }
  }
`;

export const GET_CANDIDATES = gql`
  query candidateDogs {
    candidateDogs {
      id
      name
      profilePic
      breed
      age
      selfSummary
    }
  }
`;

export const LOGIN_QUERY = gql`
  query($email: String!, $password: String!) {
    loginDog(email: $email, password: $password) {
      id
    }
  }
`;
