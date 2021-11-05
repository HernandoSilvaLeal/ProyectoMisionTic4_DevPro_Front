import { Route, Redirect } from "react-router-dom";
import Header from "../../components/Header/Header";

const Main = ({ component: Component, loading, login, ...rest }) => {
  return (
    <div>
      <Header {...rest} />
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
    </div>
  );
};

export default Main;
