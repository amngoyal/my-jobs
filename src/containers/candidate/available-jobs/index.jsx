import React, { useEffect } from "react";
import { Button, Header } from "../../../components";
import {
  AvailableJobsContainer,
  AvailableJobsContent,
  PageRoute,
  JobCardContainer,
  JobCard,
  JobCardActions,
  JobLocation,
  ViewButton,
  DialogTitleContainer,
  CustomDialog,
  NoPostJobContainer,
} from "./styles";
import { AiFillHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  getAvailableJobs,
  applyToNewJob,
  getAppliedJobs,
} from "../../../redux/candidate/actions";
import { GrDocumentText } from "react-icons/gr";

const AvailableJobs = (props) => {
  const { getAllAvailableJobs, availableJobs, applyToJob } = props;

  useEffect(() => {
    getAllAvailableJobs();
  }, []);

  // *********************** states *******************
  const [openDialog, setOpenDialog] = useState(false);
  const [jobDetails, setJobDetails] = useState({});

  // ************************** handlers *************************
  const handleOpenDialog = (e, item) => {
    e.preventDefault();
    setJobDetails(item);
    setOpenDialog(true);
  };

  const handleApplyJob = (e, jobId) => {
    e.preventDefault();

    const closeDialog = () => {
      setOpenDialog(false);
    };
    applyToJob(jobId, closeDialog);
  };

  return (
    <AvailableJobsContainer>
      <Header candidate />

      <AvailableJobsContent>
        <PageRoute>
          <AiFillHome></AiFillHome>
          <p>Home</p>
        </PageRoute>

        <h1>Available jobs for you</h1>

        <JobCardContainer>
          {availableJobs?.length === 0 ? (
            <NoPostJobContainer>
              <GrDocumentText />
              <p>Available jobs will show here!</p>
            </NoPostJobContainer>
          ) : (
            <>
              {availableJobs.map((item) => (
                <JobCard key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <JobCardActions>
                    <JobLocation>
                      <GoLocation />
                      <p> {item.location}</p>
                    </JobLocation>
                    <ViewButton onClick={(e) => handleOpenDialog(e, item)}>
                      Apply
                    </ViewButton>
                  </JobCardActions>
                </JobCard>
              ))}
            </>
          )}
        </JobCardContainer>
      </AvailableJobsContent>

      <CustomDialog
        fullWidth
        maxWidth="xs"
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle disableTypography>
          <DialogTitleContainer>
            <h3>Apply for this job</h3>
            <IconButton aria-label="close" onClick={() => setOpenDialog(false)}>
              <MdClose />
            </IconButton>
          </DialogTitleContainer>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to apply for this job?
          </DialogContentText>
          <p>
            <b>Profile:</b> {jobDetails.title}
          </p>
          <p>
            <b>Location:</b> {jobDetails.location}
          </p>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpenDialog(false)}>
            No
          </Button>
          <Button
            color="primary"
            autoFocus
            onClick={(e) => handleApplyJob(e, jobDetails.id)}
          >
            Yes
          </Button>
        </DialogActions>
      </CustomDialog>
    </AvailableJobsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    appliedJobs: state.candidate.appliedJobs,
    availableJobs: state.candidate.availableJobs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAvailableJobs: () => dispatch(getAvailableJobs()),
    getAllAppliedJobs: () => dispatch(getAppliedJobs()),
    applyToJob: (jobId, closeDialog) =>
      dispatch(applyToNewJob(jobId, closeDialog)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AvailableJobs));
