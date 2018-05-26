import * as types from "../constants/historyActionTypes";

export const setHistory = (squareIndex, symbol, step) => dispatch => {
  dispatch({ type: types.SET_HISTORY, squareIndex, symbol, step });
};
