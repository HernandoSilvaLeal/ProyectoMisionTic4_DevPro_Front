import React, { Component } from "react";
import Header from "../../components/Header/Header";
import TableProjects from "../../components/TableProjects/TableProjects";
export default class ProjectsPage extends Component {
  render () {
    return (
      <div>
        <Header/>
        <h1>ProjectsPage</h1>
        <TableProjects/>
      </div>
    )
  }
}