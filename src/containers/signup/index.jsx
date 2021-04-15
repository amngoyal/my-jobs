import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Button, InputField } from "../../components";
import { register } from "../../redux/user/actions";
import {
  SignupContainer,
  SignupUpperPanel,
  SignupLowerPanel,
  SignupFormCard,
  SignupForm,
  InputLabel,
  Navbar,
  NavbarContent,
  ProfileTypeCardsContainer,
  ProfileTypeCard,
  LabelContainer,
} from "./styles";

const Signup = (props) => {
  const { registerUser } = props;
  // ****************** states **********************
  const [profileType, setProfileType] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [skills, setSkills] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const [validationError, setValidationError] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  // ********************** handlers **********************
  const handleSignupError = (msg) => {
    setErrorMessage(msg);
    setError(true);
  };

  const handleSubmitSignupForm = (e) => {
    e.preventDefault();

    if (
      fullName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setValidationError({
        email: email === "",
        password: password === "",
        confirmPassword: confirmPassword === "",
        fullName: fullName === "",
      });

      return;
    }

    const userData = {
      email: email,
      userRole: profileType,
      password: password,
      confirmPassword: confirmPassword,
      name: fullName,
      skills: skills,
    };

    const routeToLogin = () => {
      props.history.push("/login");
    };

    registerUser(userData, routeToLogin, handleSignupError);
  };

  return (
    <SignupContainer>
      <SignupUpperPanel>
        <Navbar>
          <NavbarContent>
            <Link to="/">
              <h1>
                My<span>Jobs</span>
              </h1>
            </Link>
          </NavbarContent>
        </Navbar>

        <SignupFormCard>
          <h1>Signup</h1>
          <SignupForm onSubmit={handleSubmitSignupForm}>
            <LabelContainer>
              <InputLabel>I'm a*</InputLabel>
            </LabelContainer>
            <ProfileTypeCardsContainer>
              <ProfileTypeCard
                onClick={() => {
                  setValidationError({
                    email: false,
                    password: false,
                    confirmPassword: false,
                    fullName: false,
                  });
                  setProfileType(0);
                }}
                selected={profileType === 0}
              >
                Recruiter
              </ProfileTypeCard>
              <ProfileTypeCard
                onClick={() => {
                  setValidationError({
                    email: false,
                    password: false,
                    confirmPassword: false,
                    fullName: false,
                  });
                  setProfileType(1);
                }}
                selected={profileType === 1}
              >
                Candidate
              </ProfileTypeCard>
            </ProfileTypeCardsContainer>
            <LabelContainer>
              <InputLabel> Name*</InputLabel>
            </LabelContainer>
            <InputField
              placeholder="Enter your full name"
              type="text"
              onChange={(e) => {
                setValidationError({
                  email: false,
                  password: false,
                  confirmPassword: false,
                  fullName: false,
                });
                setFullName(e.target.value);
              }}
              isInvalid={validationError.fullName}
            ></InputField>
            {validationError.fullName && <span>This field is mandatory</span>}
            <LabelContainer>
              <InputLabel>Email Address*</InputLabel>
            </LabelContainer>
            <InputField
              type="email"
              onChange={(e) => {
                setValidationError({
                  email: false,
                  password: false,
                  confirmPassword: false,
                  fullName: false,
                });
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
              isInvalid={validationError.email}
            ></InputField>
            {validationError.fullName && <span>This field is mandatory</span>}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "48%" }}>
                <LabelContainer>
                  <InputLabel>Create Password*</InputLabel>
                </LabelContainer>
                <InputField
                  type="password"
                  fullWidth
                  onChange={(e) => {
                    setValidationError({
                      email: false,
                      password: false,
                      confirmPassword: false,
                      fullName: false,
                    });
                    setPassword(e.target.value);
                  }}
                  placeholder="Enter your password"
                  isInvalid={validationError.password}
                ></InputField>
                {validationError.password && (
                  <span
                    style={{
                      width: "100%",
                      textAlign: "right",
                      color: "red",
                      marginTop: "5px",
                      marginLeft: "auto",
                      fontSize: "14px",
                    }}
                  >
                    This field is mandatory
                  </span>
                )}
              </div>
              <div style={{ width: "48%" }}>
                <LabelContainer>
                  <InputLabel>Confirm Password*</InputLabel>
                </LabelContainer>
                <InputField
                  fullWidth
                  type="password"
                  onChange={(e) => {
                    setValidationError({
                      email: false,
                      password: false,
                      confirmPassword: false,
                      fullName: false,
                    });
                    setConfirmPassword(e.target.value);
                  }}
                  placeholder="Confirm password"
                  isInvalid={validationError.confirmPassword}
                ></InputField>

                {validationError.confirmPassword && (
                  <span
                    style={{
                      width: "100%",
                      textAlign: "right",
                      color: "red",
                      marginTop: "5px",
                      marginLeft: "auto",
                      fontSize: "14px",
                    }}
                  >
                    This field is mandatory
                  </span>
                )}
              </div>
            </div>
            <LabelContainer>
              <InputLabel>Skills</InputLabel>
            </LabelContainer>
            <InputField
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Enter your skills"
            ></InputField>
            {error && <span>{errorMessage}</span>}
            <Button type="submit" disabled={props.signupLoading}>
              {!props.signupLoading ? (
                "Signup"
              ) : (
                <CircularProgress color="white" />
              )}
            </Button>{" "}
          </SignupForm>
          <p>
            Have an account? <Link to="/login"> Login</Link>
          </p>
        </SignupFormCard>
      </SignupUpperPanel>
      <SignupLowerPanel></SignupLowerPanel>
    </SignupContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    signupLoading: state.user.registerLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (userData, routeToLogin, showError) =>
      dispatch(register(userData, routeToLogin, showError)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));
