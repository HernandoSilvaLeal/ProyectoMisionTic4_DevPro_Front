import { useQuery } from "@apollo/client";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { FaEdit, FaInfo } from "react-icons/fa";
import { Link } from "react-router-dom";

import { PROJECTS_QUERY } from "../../services/GraphQL/queries/projects";

const TableProjects = (props) => {
  const { loading, data } = useQuery(PROJECTS_QUERY);

  if (loading) {
    return <div>loading</div>;
  }
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
            <th>Editar</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {data.projects.map((project, key) => {
            return (
              <tr key={key}>
                <th scope="row">1</th>
                <td>{project.title}</td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.lider.name}</td>
                <td>Table cell</td>
                <td>{project.status}</td>
                <td>{project.fase}</td>
                <td>
                  <Link to={`/project/${project._id}`}>
                    <FaEdit />
                  </Link>
                </td>
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
