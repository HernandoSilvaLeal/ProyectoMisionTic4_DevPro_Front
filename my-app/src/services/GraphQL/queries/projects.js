import { gql } from "@apollo/client";

const PROJECTS_QUERY = gql`
  query Projets {
    projects {
      _id
      title
      description
      startDate
      endDate
      fase
      status
      lider {
        name
        email
      }
    }
  }
`;

// mutation Login($email: String!, $password: String!) {

const SINGLE_PROJECT_QUERY = gql`
  query Projet($id: ID!) {
    project(id: $id) {
      _id
      title
      description
      startDate
      endDate
      fase
      status
      lider {
        name
        email
      }
    }
  }
`;

export { PROJECTS_QUERY, SINGLE_PROJECT_QUERY };
