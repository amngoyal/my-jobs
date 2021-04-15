import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button, Header, InputField } from "../../components";
import { postNewJob } from "../../redux/recruiter/action";
import {
  PostJobContainer,
  PostJobUpperPanel,
  PostJobLowerPanel,
  PostJobFormCard,
  PostJobForm,
  InputLabel,
  PageRouteText,
} from "./styles";

const PostJob = (props) => {
  const { postJob } = props;

  // ****************** states **********************
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState({
    jobTitle: false,
    description: false,
    location: false,
  });

  // ********************** handlers **********************
  const handleSubmitPostJobForm = (e) => {
    e.preventDefault();
    const data = {
      title: jobTitle,
      description: description,
      location: location,
    };

    const routeToHome = () => {
      props.history.push("/home");
    };

    postJob(data, routeToHome);
  };

  return (
    <PostJobContainer>
      <PostJobUpperPanel>
        <Header />
        <PageRouteText>
          <AiFillHome></AiFillHome>
          <p>Home {">"} Post a Job</p>
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
              onChange={(e) => setJobTitle(e.target.value)}
              isInvalid={error.jobTitle}
            ></InputField>

            <div>
              <InputLabel>Description*</InputLabel>
            </div>
            <InputField
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter job description"
              isInvalid={error.description}
            ></InputField>

            <div>
              <InputLabel>Location*</InputLabel>
            </div>
            <InputField
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              isInvalid={error.location}
            ></InputField>

            <Button type="submit">Post</Button>
          </PostJobForm>
        </PostJobFormCard>
      </PostJobUpperPanel>
      <PostJobLowerPanel></PostJobLowerPanel>
    </PostJobContainer>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    postJob: (payload, routeToHome) =>
      dispatch(postNewJob(payload, routeToHome)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PostJob));
