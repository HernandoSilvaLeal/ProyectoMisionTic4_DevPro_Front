import { gql } from "@apollo/client";

const TOGGLE_PROJECT_STATUS = gql`
  mutation ToggleProject($projectId: String!) {
    toggleProjectStatus(projectId: $projectId) {
      _id
      title
      status
    }
  }
`;

export { TOGGLE_PROJECT_STATUS };
