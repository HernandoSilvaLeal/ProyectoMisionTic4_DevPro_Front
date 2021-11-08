import { gql } from "@apollo/client";

const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateUser(
    $name: String!
    $email: String!
    $password: String
    $confirmPassword: String
    $identification: String!
  ) {
    updateSelfUser(
      name: $name
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      identification: $identification
    ) {
      _id
      name
      email
      role
      state
      identification
    }
  }
`;

export { UPDATE_PROFILE_MUTATION };
