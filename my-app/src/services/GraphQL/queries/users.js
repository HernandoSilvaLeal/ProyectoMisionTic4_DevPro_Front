import { gql } from "@apollo/client";

const USERS_QUERY = gql`
  query users {
    users {
      _id
      role
      name
      identification
      email
      state
    }
  }
`;

export { USERS_QUERY };
