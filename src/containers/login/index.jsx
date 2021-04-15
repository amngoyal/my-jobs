import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Button, InputField } from "../../components";
import { login } from "../../redux/user/actions";

import {
  LoginContainer,
  LoginUpperPanel,
  LoginLowerPanel,
  LoginFormCard,
  LoginForm,
  InputLabel,
  Navbar,
  NavbarContent,
} from "./styles";

const Login = (props) => {
  const { loginUser, loading } = props;
  // ****************** states **********************
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({
    email: false,
    password: false,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  // ********************** handlers **********************
  const handleLoginError = (msg) => {
    setErrorMessage(msg);
    setError(true);
    setValidationError({
      email: true,
      password: true,
    });
  };

  const handleSubmitLoginForm = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setValidationError({
        email: email === "",
        password: password === "",
      });

      return;
    }

    const routeToHome = () => {
      props.history.replace("/home");
    };

    loginUser(
      {
        email: email,
        password: password,
      },
      routeToHome,
      handleLoginError
    );
  };

  return (
    <LoginContainer>
      <LoginUpperPanel>
        <Navbar>
          <NavbarContent>
            <Link to="/">
              <h1>
                My<span>Jobs</span>
              </h1>
            </Link>
          </NavbarContent>
        </Navbar>

        <LoginFormCard>
          <h1>Login</h1>
          <LoginForm onSubmit={handleSubmitLoginForm}>
            <div>
              <InputLabel>Email Address</InputLabel>
            </div>
            <InputField
              placeholder="Enter your email"
              type="email"
              onChange={(e) => {
                setValidationError({ email: false, password: false });
                setEmail(e.target.value);
              }}
              isInvalid={validationError.email}
            ></InputField>

            <div>
              <InputLabel>Password</InputLabel>
              <Link to="/forgot-password">Forgot your password?</Link>
            </div>
            <InputField
              type="password"
              onChange={(e) => {
                setValidationError({ email: false, password: false });
                setPassword(e.target.value);
              }}
              placeholder="Enter your password"
              isInvalid={validationError.password}
            ></InputField>
            {error && <span>{errorMessage}</span>}
            <Button type="submit" disabled={loading}>
              {!loading ? "Login" : <CircularProgress color="white" />}
            </Button>
          </LoginForm>
          <p>
            New to MyJobs? <Link to="/signup"> Create an account</Link>
          </p>
        </LoginFormCard>
      </LoginUpperPanel>
      <LoginLowerPanel></LoginLowerPanel>
    </LoginContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    loading: state.user.loginLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (payload, routeToHome, showError) =>
      dispatch(login(payload, routeToHome, showError)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
