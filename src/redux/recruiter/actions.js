import {
  CANDIDATE_LOADING,
  ERROR,
  LOADING,
  POST_JOB,
  RESET_DATA,
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

export const resetRecruiterData = () => {
  return {
    type: RESET_DATA,
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

export const postNewJob = (payload, routeToHome, showError) => {
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
      console.log(err.response?.data);
      dispatch(setError(err.response?.data));
      if (err.response?.data?.message) {
        showError(err.response?.data?.message);
      } else {
        const errKey = Object.keys(err.response?.data.errors[0])[0];
        console.log(errKey);
        showError(err.response?.data.errors[0][errKey]);
      }
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
