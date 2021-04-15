import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button, Header, InputField } from "../../components";
import { postNewJob } from "../../redux/recruiter/actions";
import {
  PostJobContainer,
  PostJobUpperPanel,
  PostJobLowerPanel,
  PostJobFormCard,
  PostJobForm,
  InputLabel,
  PageRouteText,
} from "./styles";
import { Link } from "react-router-dom";

const PostJob = (props) => {
  const { postJob, loading } = props;

  // ****************** states **********************
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [validationError, setValidationError] = useState({
    jobTitle: false,
    description: false,
    location: false,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  // ********************** handlers **********************
  const handlePostJobError = (msg) => {
    setErrorMessage(msg);
    setError(true);
    setValidationError({
      jobTitle: true,
      description: true,
      location: true,
    });
  };

  const handleSubmitPostJobForm = (e) => {
    e.preventDefault();

    if (jobTitle === "" || description === "" || location === "") {
      setValidationError({
        jobTitle: jobTitle === "",
        description: description === "",
        location: location === "",
      });

      setErrorMessage("All fields are mandatory.");
      setError(true);
      return;
    }

    const data = {
      title: jobTitle.trim(),
      description: description.trim(),
      location: location.trim(),
    };

    const routeToHome = () => {
      props.history.push("/home");
    };

    postJob(data, routeToHome, handlePostJobError);
  };

  return (
    <PostJobContainer>
      <PostJobUpperPanel>
        <Header />
        <PageRouteText>
          <AiFillHome></AiFillHome>
          <p>
            {" "}
            <Link to="/home">Home</Link> {">"} Post a Job
          </p>
        </PageRouteText>

        <PostJobFormCard>
          <h1>Post a Job</h1>
          <PostJobForm onSubmit={handleSubmitPostJobForm}>
            <div>
              <InputLabel>Job title*</InputLabel>
            </div>
            <InputField
              placeholder="Enter job title"
              type="text"
              onChange={(e) => {
                setValidationError({
                  jobTitle: false,
                  description: false,
                  location: false,
                });
                setJobTitle(e.target.value);
              }}
              isInvalid={validationError.jobTitle}
            ></InputField>

            <div>
              <InputLabel>Description*</InputLabel>
            </div>
            <InputField
              type="text"
              onChange={(e) => {
                setValidationError({
                  jobTitle: false,
                  description: false,
                  location: false,
                });
                setDescription(e.target.value);
              }}
              placeholder="Enter job description"
              isInvalid={validationError.description}
            ></InputField>

            <div>
              <InputLabel>Location*</InputLabel>
            </div>
            <InputField
              type="text"
              onChange={(e) => {
                setValidationError({
                  jobTitle: false,
                  description: false,
                  location: false,
                });
                setLocation(e.target.value);
              }}
              placeholder="Enter location"
              isInvalid={validationError.location}
            ></InputField>
            {error && <span>{errorMessage}</span>}

            <Button type="submit" disabled={loading}>
              {loading ? <CircularProgress color="white" /> : "Post"}
            </Button>
          </PostJobForm>
        </PostJobFormCard>
      </PostJobUpperPanel>
      <PostJobLowerPanel></PostJobLowerPanel>
    </PostJobContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.recruiter.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postJob: (payload, routeToHome, showError) =>
      dispatch(postNewJob(payload, routeToHome, showError)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostJob));
