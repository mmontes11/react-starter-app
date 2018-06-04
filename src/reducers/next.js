import { NEXT_PLAYER } from "../constants/actionTypes/next";

const initialState = true;

const nextReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PLAYER:
      return action.step % 2 === 0;
    default:
      return state;
  }
};

export default nextReducer;
