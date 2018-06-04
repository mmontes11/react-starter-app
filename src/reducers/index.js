import { combineReducers } from "redux";
import step from "reducers/step";
import next from "reducers/next";
import history from "reducers/history";

const rootReducer = combineReducers({
  step,
  xIsNext: next,
  history,
});

export default rootReducer;
