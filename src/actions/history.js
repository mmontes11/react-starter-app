import * as types from "constants/actionTypes/history";

export const setHistory = (squareIndex, symbol, step) => ({ type: types.SET_HISTORY, squareIndex, symbol, step });
