import * as types from "../constants/nextActionTypes";

export const nextPlayer = () => (dispatch, getState) => {
  dispatch({ type: types.NEXT_PLAYER, step: getState().step });
};
