import { Route } from "react-router-dom";

const Authentication = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <div className="container">
            <div className="row">
              <Component {...props} />
            </div>
          </div>
        );
      }}
    />
  );
};

export default Authentication;
