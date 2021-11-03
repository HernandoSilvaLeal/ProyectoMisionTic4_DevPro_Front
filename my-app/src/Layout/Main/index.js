import { Route, Redirect } from "react-router-dom";

const Main = ({ component: Component, loading, login, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading || login || localStorage.token) {
          return (
            <div className="container">
              <div className="row">
                <Component {...props} />
              </div>
            </div>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default Main;
