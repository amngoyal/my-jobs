import {
  APPLIED_JOBS_LOADING,
  APPY_TO_JOB,
  AVAILABLE_JOBS_LOADING,
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

export const startAvailableJobsLoading = () => {
  return {
    type: AVAILABLE_JOBS_LOADING,
  };
};

export const startAppliedJobsLoading = () => {
  return {
    type: APPLIED_JOBS_LOADING,
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

export const getAvailableJobs = (page) => {
  return async (dispatch) => {
    dispatch(startAvailableJobsLoading());
    try {
      const res = await axiosInstance.get(`/candidates/jobs?page=${page}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      dispatch(
        setAvailableJobs({
          availableJobs: res.data?.data ? res.data?.data : [],
          totalCount: res.data?.metadata?.count,
        })
      );
    } catch (err) {
      dispatch(setError(err.response?.data));
    }
  };
};

export const getAppliedJobs = () => {
  return async (dispatch) => {
    dispatch(startAppliedJobsLoading());
    try {
      const res = await axiosInstance.get("/candidates/jobs/applied", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      dispatch(setAppliedJobs(res.data?.data ? res.data?.data : []));
    } catch (err) {
      dispatch(setError(err.response?.data));
    }
  };
};

export const applyToNewJob = (jobId, closeDialog) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      await axiosInstance.post(
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
      closeDialog();
      dispatch(applyToJob(jobId));
    } catch (err) {}
  };
};
