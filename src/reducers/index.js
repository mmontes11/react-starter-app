import { combineReducers } from "redux";
import step from "./step";
import next from "./next";
import history from "./history";

const rootReducer = combineReducers({
  step,
  xIsNext: next,
  history,
});

export default rootReducer;
