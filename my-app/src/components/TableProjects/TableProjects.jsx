import { useMutation, useQuery } from "@apollo/client";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { FaEdit, FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";

import { PROJECTS_QUERY } from "../../services/GraphQL/queries/projects";
import { TOGGLE_PROJECT_STATUS } from "../../services/GraphQL/mutations/projects";
import ToggleProjectStatus from "../../components/ToggleProjectStatus";

const TableProjects = (props) => {
  const { loading, data } = useQuery(PROJECTS_QUERY);
  const [toggleProjectStatus] = useMutation(TOGGLE_PROJECT_STATUS);

  if (loading) {
    return <div>loading</div>;
  }

  const handleChange = ({ target }) => {
    toggleProjectStatus({
      variables: {
        projectId: target.id,
      },
    });
  };

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre proyecto</th>
            <th>Fecha de Inicio</th>
            <th>Fecha Fin</th>
            <th>Nombre Lider</th>
            <th>Estado de Aprobacion</th>
            <th>Estado del Proyecto</th>
            <th>Fase del Proyecto</th>
            {props.user.role === "LEADER" ? <td>Editar</td> : null}
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {data.projects.map((project, key) => {
            console.log(project);
            return (
              <tr key={key}>
                <th scope="row">1</th>
                <td>{project.title}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.lider.name}</td>
                <td>
                  {props.user.role === "ADMIN" ? (
                    <ToggleProjectStatus
                      checked={project.status === "ACTIVE"}
                      onChange={handleChange}
                      id={project._id}
                    />
                  ) : (
                    project.status
                  )}
                </td>
                <td>{project.fase}</td>
                {props.user.role === "LEADER" ? (
                  <td>
                    <Link to={`/projects/${project._id}`}>
                      <FaEdit />
                    </Link>
                  </td>
                ) : null}
                <td>
                  <a href="/home">
                    <FaInfo />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TableProjects);
