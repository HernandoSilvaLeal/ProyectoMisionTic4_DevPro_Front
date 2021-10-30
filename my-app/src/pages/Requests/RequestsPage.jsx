import React, { Component } from "react";
import Header from "../../components/Header/Header";
import TableProjects from "../../components/TableProjects/TableProjects";
export default class RequestsPages extends Component {
  render () {
    return (
      <div>
        <Header/>
        <h1>RequestsPages</h1>
        <TableProjects/>
      </div>
    )
  }
}