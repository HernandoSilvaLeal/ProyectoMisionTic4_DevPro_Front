import React, { Component } from "react";
import { Table } from "reactstrap";
import { FaEdit, FaInfo } from "react-icons/fa";

const TableProjects = () => {
    return (
      <div>
        <Table responsive>
  <thead>
    <tr>
      <th>
        ID
      </th>
      <th>
        Nombre proyecto
      </th>
      <th>
        Fecha de Inicio
      </th>
      <th>
        Fecha Fin
      </th>
      <th>
        Nombre Lider
      </th>
      <th>
        Estado de Aprobacion
      </th>
      <th>
        Estado del Proyecto
      </th>
      <th>
        Fase del Proyecto
      </th>
      <th>
        Editar
      </th>
      <th>
        Info
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
      <td>
        <a href="/home">
        <FaInfo/>
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
      <td>
        <a href="/home">
        <FaInfo/>
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
      <td>
        <a href="/home">
        <FaInfo/>
        </a>
      </td>
    </tr>
  </tbody>
</Table>
      </div>
    )
}

export default TableProjects;