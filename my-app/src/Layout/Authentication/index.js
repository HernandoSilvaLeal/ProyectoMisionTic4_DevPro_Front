import { Route, Redirect } from "react-router-dom";

const Authentication = ({ component: Component, loading, login, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading || login || localStorage.token) {
          return <Redirect to="/" />;
        } else {
          return (
            <div className="container">
              <div className="row">
                <Component {...props} />
              </div>
            </div>
          );
        }
      }}
    />
  );
};

export default Authentication;
