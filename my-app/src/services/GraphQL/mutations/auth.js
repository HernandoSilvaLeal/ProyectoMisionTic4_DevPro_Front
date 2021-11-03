import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        name
        email
        role
        state
      }
      token
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation Register(
    $name: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      name: $name
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      user {
        _id
        name
        email
        role
        state
      }
      token
    }
  }
`;

export const CHECK_SESSION = gql`
  query checkSession {
    checkSession {
      user {
        name
        email
      }
      token
    }
  }
`;
