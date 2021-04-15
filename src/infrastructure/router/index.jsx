import { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import { connect } from "react-redux";
import CustomRoute from "../../components/custom-router";
import { routes } from "./routes";
import { loginUser } from "../../redux/user/actions";

function App({ handleLoginUser }) {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      var decodedUserData = jwt.decode(token);
      handleLoginUser(decodedUserData);
    }
  });

  return (
    <div className="App">
      <Switch>
        {routes.map((route) => (
          <CustomRoute key={route.path} {...route} />
        ))}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginUser: (payload) => dispatch(loginUser(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
