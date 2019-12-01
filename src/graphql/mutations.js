import gql from "graphql-tag";

/**
 * GRAPHQL MUTATIONS HOLDERS
 */

export const REGISTER_DOG = gql`
  mutation RegisterDog(
    $email: String!
    $password: String!
    $name: String!
    $profilePic: Upload!
    $selfSummary: String
    $breed: String!
    $age: String!
    $size: String!
    $weight: Int!
    $address: String!
  ) {
    registerDog(
      email: $email
      password: $password
      name: $name
      profilePic: $profilePic
      selfSummary: $selfSummary
      breed: $breed
      age: $age
      size: $size
      weight: $weight
      address: $address
    )
  }
`;

export const INVALIDATE_TOKEN = gql`
  mutation InvalidateTokens {
    invalidateTokens
  }
`;

export const LIKE_DOG = gql`
  mutation LikeDog($likedId: ID!) {
    like(likedId: $likedId) {
      successful
      isAMatch
    }
  }
`;

export const DISLIKE_DOG = gql`
  mutation DislikeDog($dislikedId: ID!) {
    dislike(dislikedId: $dislikedId)
  }
`;
