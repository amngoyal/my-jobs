import { combineReducers } from "redux";
import { UserReducer, RecruiterReducer, CandidateReducer } from "../../redux";

const rootReducer = combineReducers({
  user: UserReducer,
  recruiter: RecruiterReducer,
  candidate: CandidateReducer,
});

export default rootReducer;
