import * as types from "../constants/stepActionTypes";

export const stepForward = () => ({ type: types.STEP_FORWARD });

export const jumpToStep = step => ({ type: types.JUMP_TO_STEP, step });
