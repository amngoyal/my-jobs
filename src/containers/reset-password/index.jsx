import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import { Button, InputField } from "../../components";
import axiosInstance from "../../infrastructure/axios";
import { handleResetPassword } from "../../redux/user/actions";
import {
  ResetPasswordContainer,
  ResetPasswordUpperPanel,
  ResetPasswordLowerPanel,
  ResetPasswordFormCard,
  ResetPasswordForm,
  InputLabel,
  Navbar,
  NavbarContent,
} from "./styles";
import { CircularProgress } from "@material-ui/core";

const ResetPassword = (props) => {
  const { loading } = props;
  const query = useQuery();
  const history = useHistory();

  // ****************** states **********************
  const [isValid, setIsValid] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [validationError, setValidationError] = useState({
    confirmPassword: false,
    password: false,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  // ********************** handlers **********************
  const handleResetPasswordError = (msg) => {
    setErrorMessage(msg);
    setError(true);
    setValidationError({
      confirmPassword: true,
      password: true,
    });
  };

  const handleSubmitResetPasswordForm = (e) => {
    e.preventDefault();

    if (confirmPassword === "" || password === "") {
      setValidationError({
        password: password === "",
        confirmPassword: confirmPassword === "",
      });

      return;
    }

    props.handleResetPasswordClick(
      { password, confirmPassword, token: query.get("token") },
      () => {
        history.replace("/login");
      },
      handleResetPasswordError
    );
  };

  useEffect(() => {
    const call = async () => {
      try {
        await axiosInstance.get(`/auth/resetpassword/${query.get("token")}`);
        setIsValid(true);
      } catch (err) {}
      setIsValidating(false);
    };

    call();
  }, [query]);

  return (
    <ResetPasswordContainer>
      <ResetPasswordUpperPanel>
        <Navbar>
          <NavbarContent>
            <Link to="/">
              <h1>
                My<span>Jobs</span>
              </h1>
            </Link>
          </NavbarContent>
        </Navbar>

        <ResetPasswordFormCard>
          {isValidating ? (
            <h1>Loading...</h1>
          ) : isValid ? (
            <div>
              <h1>Reset Password</h1>
              <p>Enter your new password below.</p>
              <ResetPasswordForm onSubmit={handleSubmitResetPasswordForm}>
                <div>
                  <InputLabel>New Password</InputLabel>
                </div>
                <InputField
                  placeholder="Enter new password"
                  type="password"
                  onChange={(e) => {
                    setValidationError({
                      confirmPassword: false,
                      password: false,
                    });
                    setPassword(e.target.value);
                  }}
                  isInvalid={validationError.password}
                ></InputField>
                <div>
                  <InputLabel>Confirm New Password</InputLabel>
                </div>
                <InputField
                  placeholder="Confirm new password"
                  type="password"
                  onChange={(e) => {
                    setValidationError({
                      confirmPassword: false,
                      password: false,
                    });
                    setConfirmPassword(e.target.value);
                  }}
                  isInvalid={validationError.confirmPassword}
                ></InputField>
                {error && <span>{errorMessage}</span>}

                <Button type="submit" disabled={loading}>
                  {loading ? <CircularProgress color="white" /> : "Reset"}
                </Button>
              </ResetPasswordForm>
            </div>
          ) : (
            <div>
              <h1>Link Expired</h1>
              <p>Reset your password again</p>
            </div>
          )}
        </ResetPasswordFormCard>
      </ResetPasswordUpperPanel>
      <ResetPasswordLowerPanel></ResetPasswordLowerPanel>
    </ResetPasswordContainer>
  );
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const mapStateToProps = (state) => {
  return {
    loading: state.user.resetPasswordLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleResetPasswordClick: (payload, routeToLogin, showError) =>
      dispatch(handleResetPassword(payload, routeToLogin, showError)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
