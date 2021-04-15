import {
  LOADING,
  ERROR,
  SET_AVAILABLE_JOBS,
  SET_APPLIED_JOBS,
  APPY_TO_JOB,
  RESET_DATA,
  AVAILABLE_JOBS_LOADING,
  APPLIED_JOBS_LOADING,
} from "./types";

const initialState = {
  availableJobs: [],
  appliedJobs: [],
  loading: false,
  availableJobsLoading: false,
  appliedJobsLoading: false,
  totalAvailableJobcount: 0,
  candidateLoading: false,
};

const CandidateReducer = function (state = initialState, actions) {
  switch (actions.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case AVAILABLE_JOBS_LOADING:
      return {
        ...state,
        availableJobsLoading: true,
      };

    case APPLIED_JOBS_LOADING:
      return {
        ...state,
        appliedJobsLoading: true,
      };

    case RESET_DATA:
      return {
        availableJobs: [],
        appliedJobs: [],
        loading: false,
        availableJobsLoading: false,
        appliedJobsLoading: false,
        totalAvailableJobcount: 0,
        candidateLoading: false,
      };

    case SET_APPLIED_JOBS:
      return {
        ...state,
        appliedJobs: actions.data,
        appliedJobsLoading: false,
      };

    case SET_AVAILABLE_JOBS:
      return {
        ...state,
        availableJobs: actions.data.availableJobs,
        totalAvailableJobcount: actions.data.totalCount,
        availableJobsLoading: false,
      };
    case APPY_TO_JOB:
      let availableJobs = state.availableJobs;
      availableJobs = availableJobs.filter((job) => job.id !== actions.data);

      return {
        ...state,
        availableJobs: availableJobs,
        totalAvailableJobcount: state.totalAvailableJobcount - 1,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        availableJobsLoading: false,
        appliedJobsLoading: false,
        error: actions.data,
      };
    default:
      return state;
  }
};

export default CandidateReducer;
