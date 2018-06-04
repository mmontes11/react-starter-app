import * as types from "../constants/actionTypes/step";

export const stepForward = () => ({ type: types.STEP_FORWARD });

export const jumpToStep = step => ({ type: types.JUMP_TO_STEP, step });
