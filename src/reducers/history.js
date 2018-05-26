import { SET_HISTORY } from "../constants/historyActionTypes";
import { getCurrentStepData } from "../helpers/ticTacToe";

const initialState = [
  {
    squares: Array(9).fill(null),
  },
];

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY: {
      const { squareIndex, symbol, step } = action;
      const { historyUntilCurrentStep, currentStepSquares } = getCurrentStepData(state, step);
      currentStepSquares[squareIndex] = symbol;
      return [...historyUntilCurrentStep, { squares: [...currentStepSquares] }];
    }
    default:
      return state;
  }
};

export default historyReducer;
