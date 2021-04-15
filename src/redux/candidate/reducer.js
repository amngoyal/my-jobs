import {
  LOADING,
  ERROR,
  SET_AVAILABLE_JOBS,
  SET_APPLIED_JOBS,
  APPY_TO_JOB,
} from "./types";

const initialState = {
  availableJobs: [],
  appliedJobs: [],
  loading: false,
  candidateLoading: false,
};

const CandidateReducer = function (state = initialState, actions) {
  switch (actions.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_APPLIED_JOBS:
      return {
        ...state,
        appliedJobs: actions.data,
        loading: false,
      };
    case SET_AVAILABLE_JOBS:
      return {
        ...state,
        availableJobs: actions.data,
        loading: false,
      };
    case APPY_TO_JOB:
      console.log(actions.data);

      let availableJobs = state.availableJobs;
      availableJobs = availableJobs.filter((job) => job.id !== actions.data);

      return {
        ...state,
        availableJobs: availableJobs,
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

export default CandidateReducer;
