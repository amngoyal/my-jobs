import {
  APPY_TO_JOB,
  ERROR,
  LOADING,
  RESET_DATA,
  SET_APPLIED_JOBS,
  SET_AVAILABLE_JOBS,
} from "./types";
import axiosInstance from "../../infrastructure/axios";

export const startLoading = () => {
  return {
    type: LOADING,
  };
};

export const setError = (errData) => {
  return {
    type: ERROR,
    data: errData,
  };
};

export const setAvailableJobs = (data) => {
  return {
    type: SET_AVAILABLE_JOBS,
    data: data,
  };
};

export const setAppliedJobs = (data) => {
  return {
    type: SET_APPLIED_JOBS,
    data,
  };
};

export const applyToJob = (jobId) => {
  return {
    type: APPY_TO_JOB,
    data: jobId,
  };
};
export const resetCandidateData = () => {
  return {
    type: RESET_DATA,
  };
};

export const getAvailableJobs = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const res = await axiosInstance.get("/candidates/jobs?page=1", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      dispatch(setAvailableJobs(res.data?.data ? res.data?.data : []));
      console.log("candidate", res);
    } catch (err) {
      console.log(err);
      dispatch(setError(err.response?.data));
    }
  };
};

export const getAppliedJobs = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const res = await axiosInstance.get("/candidates/jobs/applied", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      dispatch(setAppliedJobs(res.data?.data ? res.data?.data : []));
      console.log("candidate", res);
    } catch (err) {
      console.log(err);
      dispatch(setError(err.response?.data));
    }
  };
};

export const applyToNewJob = (jobId, closeDialog) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const res = await axiosInstance.post(
        "/candidates/jobs",
        {
          jobId: jobId,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      closeDialog();
      dispatch(applyToJob(jobId));
    } catch (err) {
      console.log(err);
    }
  };
};
