import React, { Component } from "react";
import Header from "../../components/Header/Header";
import TableUsers from "../../components/TableUsers/TableUsers";
export default class UsersPage extends Component {
  render () {
    return (
      <div>
        <Header/>
        <h1>UsersPage</h1>
        <TableUsers/>
      </div>
    )
  }
}