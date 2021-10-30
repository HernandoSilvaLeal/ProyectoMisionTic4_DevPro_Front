import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login(
    $email: String!
    $password: String!
  ) {
    login(
      email: $email
      password: $password
    ){
      _id
      name
      email
      role
      token
      state
    }
  }
`;