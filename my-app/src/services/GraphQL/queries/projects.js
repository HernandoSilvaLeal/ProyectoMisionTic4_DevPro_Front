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

export { PROJECTS_QUERY };
