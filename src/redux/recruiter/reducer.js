import {
  LOADING,
  ERROR,
  SET_POSTED_JOBS,
  SET_JOB_CANDIDATES,
  POST_JOB,
  CANDIDATE_LOADING,
} from "./types";

const initialState = {
  postedJobs: [],
  jobCandidates: [],
  loading: false,
  candidateLoading: false,
};

const RecruiterReducer = function (state = initialState, actions) {
  switch (actions.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case CANDIDATE_LOADING:
      return {
        ...state,
        candidateLoading: true,
      };

    case SET_POSTED_JOBS:
      return {
        ...state,
        postedJobs: actions.data,
        loading: false,
      };
    case SET_JOB_CANDIDATES:
      return {
        ...state,
        jobCandidates: actions.data,
        candidateLoading: false,
      };
    case POST_JOB:
      let updatedJobs = state.postedJobs;
      updatedJobs.push(actions.data);
      return {
        ...state,
        postedJobs: updatedJobs,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: actions.data,
      };
    default:
      return state;
  }
};

export default RecruiterReducer;
