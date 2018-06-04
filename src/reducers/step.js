import { STEP_FORWARD, JUMP_TO_STEP } from "constants/actionTypes/step";

const initialState = 0;

const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case STEP_FORWARD:
      return state + 1;
    case JUMP_TO_STEP:
      return action.step;
    default:
      return state;
  }
};

export default stepReducer;
