import * as types from "../constants/stepActionTypes";

export const stepForward = () => dispatch => {
  dispatch({ type: types.STEP_FORWARD });
};

export const jumpToStep = step => dispatch => {
  dispatch({ type: types.JUMP_TO_STEP, step });
};
