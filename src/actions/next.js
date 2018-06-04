import * as types from "../constants/actionTypes/next";

export const nextPlayer = () => (dispatch, getState) => {
  dispatch({ type: types.NEXT_PLAYER, step: getState().step });
};
