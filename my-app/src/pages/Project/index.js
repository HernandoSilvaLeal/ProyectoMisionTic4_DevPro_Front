import { useQuery } from "@apollo/client";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardHeader, CardText, CardTitle } from "reactstrap";

import { SINGLE_PROJECT_QUERY } from "../../services/GraphQL/queries/projects";

const Project = (props) => {
  const { id } = useParams();
  const { loading, data } = useQuery(SINGLE_PROJECT_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <div>loading...</div>;
  }

  const { project } = data;

  return (
    <Card style={{ marginTop: "10px" }}>
      <CardHeader>
        <CardTitle>
          <h1>{project.title}</h1>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>{project.description}</CardText>
        <p>
          Creador: {project.lider.name} - {project.lider.email}
        </p>
        <p>
          Deste: {project.startDate} - hasta: {project.endDate}
        </p>
        <p>Estado: {project.status}</p>
      </CardBody>
    </Card>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

export default connect(mapStateToProps)(Project);
