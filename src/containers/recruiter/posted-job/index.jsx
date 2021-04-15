import React, { useEffect } from "react";
import { Button, Header } from "../../../components";
import {
  PostedJobContainer,
  PostedJobContent,
  PageRoute,
  JobCardContainer,
  JobCard,
  JobCardActions,
  JobLocation,
  ViewButton,
  DialogTitleContainer,
  CustomDialog,
  ApplicantsCardWrapper,
  ApplicantCard,
  ApplicantDetailsContainer,
  ApplicantName,
  ApplicantSkillsContainer,
  NoFileContainer,
  NoPostJobContainer,
} from "./styles";
import { AiFillHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import {
  Avatar,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { connect } from "react-redux";
import {
  getCandidateList,
  getPostedJobs,
} from "../../../redux/recruiter/action";
import { IconContext } from "react-icons";
import { useHistory } from "react-router";

const PostedJobs = (props) => {
  const history = useHistory();

  const {
    getPostedJobsData,
    getJobCandidates,
    jobCandidates,
    postedJobs,
  } = props;

  useEffect(() => {
    getPostedJobsData();
  }, []);

  // *********************** states *******************
  const [openDialog, setOpenDialog] = useState(false);

  // ************************** handlers *************************
  const handleOpenDialog = (e, item) => {
    e.preventDefault();
    getJobCandidates(item.id);
    setOpenDialog(true);
  };

  return (
    <PostedJobContainer>
      <Header recruiter />

      <PostedJobContent>
        <PageRoute>
          <AiFillHome></AiFillHome>
          <p>Home</p>
        </PageRoute>

        <h1>Jobs posted by you</h1>

        <JobCardContainer>
          {postedJobs?.length === 0 ? (
            <NoPostJobContainer>
              <GrDocumentText />
              <p>Your posted jobs will show here!</p>
              <Button onClick={() => history.push("/post-job")}>
                Post a Job
              </Button>
            </NoPostJobContainer>
          ) : (
            <>
              {postedJobs?.map((item) => (
                <JobCard key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <JobCardActions>
                    <JobLocation>
                      <GoLocation />
                      <p>{item.location}</p>
                    </JobLocation>
                    <ViewButton onClick={(e) => handleOpenDialog(e, item)}>
                      View Application
                    </ViewButton>
                  </JobCardActions>
                </JobCard>
              ))}
            </>
          )}
        </JobCardContainer>
      </PostedJobContent>

      <CustomDialog
        fullWidth
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle disableTypography>
          <DialogTitleContainer>
            <h3>Applicants for this job</h3>
            <IconButton aria-label="close" onClick={() => setOpenDialog(false)}>
              <MdClose />
            </IconButton>
          </DialogTitleContainer>
        </DialogTitle>
        <DialogContent>
          <p>
            Total {jobCandidates?.length ? jobCandidates.length : 0}{" "}
            applications
          </p>
          <ApplicantsCardWrapper>
            {jobCandidates?.length === 0 ? (
              <NoFileContainer>
                <GrDocumentText />
                <p>No applications available!</p>
              </NoFileContainer>
            ) : (
              <>
                {jobCandidates?.map((item) => (
                  <ApplicantCard key={item.id}>
                    <ApplicantDetailsContainer>
                      <Avatar></Avatar>
                      <ApplicantName>
                        <b>{item.name}</b>
                        <p>{item.email}</p>
                      </ApplicantName>
                    </ApplicantDetailsContainer>
                    <ApplicantSkillsContainer>
                      <b>Skills</b>
                      <p>{item.skills}</p>
                    </ApplicantSkillsContainer>
                  </ApplicantCard>
                ))}
              </>
            )}
          </ApplicantsCardWrapper>
        </DialogContent>
      </CustomDialog>
    </PostedJobContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    postedJobs: state.recruiter.postedJobs,
    jobCandidates: state.recruiter.jobCandidates,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostedJobsData: () => dispatch(getPostedJobs()),
    getJobCandidates: (jobId) => dispatch(getCandidateList(jobId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostedJobs);
