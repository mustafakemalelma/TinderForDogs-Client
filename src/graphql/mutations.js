import gql from "graphql-tag";

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
