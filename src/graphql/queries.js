import gql from "graphql-tag";

export const GET_LOGGED_IN = gql`
  {
    auth @client {
      loggedIn
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
