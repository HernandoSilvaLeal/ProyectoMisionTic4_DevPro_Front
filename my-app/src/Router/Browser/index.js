import { useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { connect } from "react-redux";

import Main from "../../Layout/Main";
import Authentication from "../../Layout/Authentication";

import LoginPage from "../../pages/Login/LoginPaje";
import RegisterPage from "../../pages/Register/RegisterPage";

import HomePage from "../../pages/Home/HomePage";
import ProfilePage from "../../pages/Profile/ProfilePage";
import ProjectsPage from "../../pages/Projects/ProjectsPage";
import RequestsPage from "../../pages/Requests/RequestsPage";
import UsersPage from "../../pages/Users/UsersPage";
import Error404 from "../../pages/Error404";
import Project from "../../pages/Project";

import { checkSession } from "../../actions/authAction";
import { CHECK_SESSION } from "../../services/GraphQL/mutations/auth";

const Browser = (props) => {
  const { loading, data } = useQuery(CHECK_SESSION);

  useEffect(() => {
    const { login, checkSession } = props;
    if (!login && data) {
      checkSession(data);
    }
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Main exact path="/" {...props} component={HomePage} />
        <Main path="/profile" {...props} component={ProfilePage} />
        <Main path="/projects/:id" {...props} component={Project} />
        <Main path="/projects" {...props} component={ProjectsPage} />
        <Main path="/requests" {...props} component={RequestsPage} />
        <Main path="/users" {...props} component={UsersPage} />

        <Authentication path="/login" {...props} component={LoginPage} />
        <Authentication path="/register" {...props} component={RegisterPage} />
        <Main path="*" exact {...props} component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.userReducer;
};

const mapDispatchToProps = {
  checkSession,
};

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
