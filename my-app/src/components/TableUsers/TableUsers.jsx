import React, { Component } from "react";
import { Table } from "reactstrap";
import { FaEdit } from "react-icons/fa";

export default class TableUsers extends Component {
  render () {

    return (
      <div>
        <Table responsive>
  <thead>
    <tr>
      <th>
        ID
      </th>
      <th>
        Rol
      </th>
      <th>
        Nombre
      </th>
      <th>
        Identificación
      </th>
      <th>
        Estado
      </th>
      <th>
        Editar
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        <a href="/home">
        <FaEdit/>
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        <a href="/home">
        <FaEdit/>
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        Table cell
      </td>
      <td>
        <a href="/home">
        <FaEdit/>
        </a>
      </td>
    </tr>
  </tbody>
</Table>
      </div>
    )
  }
}