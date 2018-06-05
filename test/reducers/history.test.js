import historyReducer from "reducers/history";

describe("reducers/history", () => {
  const initialState = [{ squares: Array(9).fill(null) }];

  it("has a default state", () => {
    expect(historyReducer(undefined, { type: "@init" })).toMatchSnapshot();
  });
  it("reduces nothing", () => {
    expect(historyReducer(initialState, { type: "WHATEVER" })).toMatchSnapshot();
  });
  it("reduces SET_HISTORY", () => {
    let state = initialState;
    const actions = [
      { type: "SET_HISTORY", squareIndex: 0, symbol: "X", step: 0 },
      { type: "SET_HISTORY", squareIndex: 3, symbol: "O", step: 1 },
      { type: "SET_HISTORY", squareIndex: 1, symbol: "X", step: 2 },
      { type: "SET_HISTORY", squareIndex: 4, symbol: "O", step: 3 },
      { type: "SET_HISTORY", squareIndex: 2, symbol: "X", step: 4 },
      { type: "SET_HISTORY", squareIndex: 5, symbol: "O", step: 5 },
    ];
    actions.forEach(action => {
      state = historyReducer(state, action);
      expect(state).toMatchSnapshot();
    });
  });
});
