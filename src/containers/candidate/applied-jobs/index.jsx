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
import { useHistory, withRouter } from "react-router";
import { connect } from "react-redux";
import {
  getAvailableJobs,
  applyToNewJob,
  getAppliedJobs,
} from "../../../redux/candidate/actions";
import { formatDateString } from "../../../lib/globalFunctions";
import { GrDocumentText } from "react-icons/gr";

const AvailableJobs = (props) => {
  const history = useHistory();

  const { getAllAppliedJobs, appliedJobs, applyToJob } = props;

  useEffect(() => {
    getAllAppliedJobs();
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
      <Header />

      <AvailableJobsContent>
        <PageRoute>
          <AiFillHome></AiFillHome>
          <p>Home</p>
        </PageRoute>

        <h1>Your Applied Jobs</h1>

        <JobCardContainer>
          {appliedJobs?.length === 0 ? (
            <NoPostJobContainer>
              <GrDocumentText />
              <p>Your applied jobs will show here!</p>
              <Button onClick={() => history.push("/home")}>
                Apply for a Job
              </Button>
            </NoPostJobContainer>
          ) : (
            <>
              {appliedJobs.map((item) => (
                <JobCard key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <JobCardActions>
                    <JobLocation>
                      <GoLocation />
                      <p> {item.location}</p>
                    </JobLocation>
                    <ViewButton
                      onClick={(e) => handleOpenDialog(e, item)}
                      disabled
                    >
                      <p>Applied at</p>
                      <p>{formatDateString(item.updatedAt)}</p>
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
