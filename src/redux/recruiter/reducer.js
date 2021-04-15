import {
  LOADING,
  ERROR,
  SET_POSTED_JOBS,
  SET_JOB_CANDIDATES,
  POST_JOB,
  CANDIDATE_LOADING,
  RESET_DATA,
  POSTED_JOBS_LOADING,
} from "./types";

const initialState = {
  postedJobs: [],
  totalPostedJobs: 0,
  jobCandidates: [],
  loading: false,
  postedJobsLoading: false,
  candidateLoading: false,
};

const RecruiterReducer = function (state = initialState, actions) {
  switch (actions.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case POSTED_JOBS_LOADING:
      return {
        ...state,
        postedJobsLoading: true,
      };

    case RESET_DATA:
      return {
        postedJobs: [],
        jobCandidates: [],
        loading: false,
        totalPostedJobs: 0,
        postedJobsLoading: false,
        candidateLoading: false,
      };
    case CANDIDATE_LOADING:
      return {
        ...state,
        candidateLoading: true,
      };

    case SET_POSTED_JOBS:
      return {
        ...state,
        postedJobs: actions.data.postedJobs ? actions.data.postedJobs : [],
        totalPostedJobs: actions.data.totalCount ? actions.data.totalCount : 0,
        postedJobsLoading: false,
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
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        postedJobsLoading: false,
        candidateLoading: false,
        error: actions.data,
      };
    default:
      return state;
  }
};

export default RecruiterReducer;
