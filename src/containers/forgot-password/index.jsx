import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Button, InputField } from "../../components";
import { Link } from "react-router-dom";
import { getForgotPasswordToken } from "../../redux/user/actions";
import {
  ForgotPasswordContainer,
  ForgotPasswordUpperPanel,
  ForgotPasswordLowerPanel,
  ForgotPasswordFormCard,
  ForgotPasswordForm,
  InputLabel,
  Navbar,
  NavbarContent,
} from "./styles";
import { CircularProgress } from "@material-ui/core";

const ForgotPassword = (props) => {
  const history = useHistory();
  const { handleSendForgotPasswordLink, loading } = props;
  // ****************** states **********************
  const [email, setEmail] = useState("");
  const [validationError, setvalidationError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  // ********************** handlers **********************
  const handleForgotPasswordError = (msg) => {
    setErrorMessage(msg);
    setError(true);
  };

  const handleSubmitForgotPasswordForm = (e) => {
    e.preventDefault();

    if (email === "") {
      setvalidationError(true);
      return;
    }

    const routeToResetPassword = (token) => {
      history.push(`/reset-password?token=${token}`);
    };

    handleSendForgotPasswordLink(
      { email },
      routeToResetPassword,
      handleForgotPasswordError
    );
  };

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordUpperPanel>
        <Navbar>
          <NavbarContent>
            <Link to="/">
              <h1>
                My<span>Jobs</span>
              </h1>
            </Link>
          </NavbarContent>
        </Navbar>

        <ForgotPasswordFormCard>
          <h1>ForgotPassword</h1>
          <p>
            Enter the email associated with your account and we’ll send you
            instructions to reset your password.
          </p>
          <ForgotPasswordForm onSubmit={handleSubmitForgotPasswordForm}>
            <div>
              <InputLabel>Email Address</InputLabel>
            </div>
            <InputField
              placeholder="Enter your email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={validationError}
            ></InputField>
            {error && <span>{errorMessage}</span>}
            <Button type="submit" disabled={loading}>
              {loading ? <CircularProgress color="white" /> : "Submit"}
            </Button>
          </ForgotPasswordForm>
        </ForgotPasswordFormCard>
      </ForgotPasswordUpperPanel>
      <ForgotPasswordLowerPanel></ForgotPasswordLowerPanel>
    </ForgotPasswordContainer>
  );
};

const mapStatesToProps = (state) => {
  return {
    loading: state.user.forgotPasswordLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSendForgotPasswordLink: (
      payload,
      routeToResetPassword,
      handleForgotPasswordError
    ) =>
      dispatch(
        getForgotPasswordToken(
          payload,
          routeToResetPassword,
          handleForgotPasswordError
        )
      ),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(ForgotPassword);
