import {
  CANDIDATE_LOADING,
  ERROR,
  LOADING,
  POST_JOB,
  SET_JOB_CANDIDATES,
  SET_POSTED_JOBS,
} from "./types";
import axiosInstance from "../../infrastructure/axios";

export const startLoading = () => {
  return {
    type: LOADING,
  };
};

export const startCandidateLoading = () => {
  return {
    type: CANDIDATE_LOADING,
  };
};

export const setError = (errData) => {
  return {
    type: ERROR,
    data: errData,
  };
};

export const setPostedJobs = (data) => {
  return {
    type: SET_POSTED_JOBS,
    data: data,
  };
};
export const setJobCandidates = (data) => {
  return {
    type: SET_JOB_CANDIDATES,
    data: data,
  };
};
export const postJob = (data) => {
  return {
    type: POST_JOB,
    data: data,
  };
};

export const getPostedJobs = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    console.log("recruiter");

    try {
      const res = await axiosInstance.get("/recruiters/jobs", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data?.data.data);
      dispatch(
        setPostedJobs(res.data.data?.data != null ? res.data.data?.data : [])
      );
    } catch (err) {
      console.log(err);
      dispatch(setError(err.response?.data));
    }
  };
};

export const postNewJob = (payload, routeToHome) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const res = await axiosInstance.post("/jobs", payload, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      console.log(res);
      dispatch(postJob(payload));
      routeToHome();
    } catch (err) {
      console.log(err);
      dispatch(setError(err.response?.data));
    }
  };
};

export const getCandidateList = (jobId) => {
  return async (dispatch) => {
    dispatch(startCandidateLoading());
    try {
      let res = await axiosInstance.get(
        `/recruiters/jobs/${jobId}/candidates`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
      dispatch(setJobCandidates(res.data?.data ? res.data.data : []));
      console.log(res);
    } catch (err) {
      console.log(err);
      dispatch(err.response?.data);
    }
  };
};
