import { useQuery } from "@apollo/client";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

import { USERS_QUERY } from "../../services/GraphQL/queries/users";

const TableUsers = () => {
  const { loading, data } = useQuery(USERS_QUERY);

  if (loading) {
    return <div>loading</div>;
  }

  console.log(data);
  const { users } = data;

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Identificación</th>
            <th>Estado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.identification}</td>
                  <td>{user.state}</td>
                  <td>
                    <Link to={`/user/${user._id}`}>
                      <FaEdit />
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <td colSpan="6">No hay usuarios para mostrar</td>
          )}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TableUsers);
