import deepFreeze from "deep-freeze";
import rootReducer from "reducers";

jest.mock("reducers/history", () => (state = "INITIAL_HISTORY", action) => {
  switch (action.type) {
    case "ACTION":
      return "STATE_HISTORY";
    default:
      return state;
  }
});

jest.mock("reducers/next", () => (state = "INITIAL_NEXT", action) => {
  switch (action.type) {
    case "ACTION":
      return "STATE_NEXT";
    default:
      return state;
  }
});

jest.mock("reducers/step", () => (state = "INITIAL_STEP", action) => {
  switch (action.type) {
    case "ACTION":
      return "STATE_STEP";
    default:
      return state;
  }
});

describe("reducers/index", () => {
  it("combines other reducers", () => {
    expect(rootReducer).toMatchSnapshot();
  });

  const state = {
    history: "INITIAL_HISTORY",
    xIsNext: "INITIAL_NEXT",
    step: "INITIAL_STEP",
  };

  deepFreeze(state);

  it("has a default state", () => {
    expect(rootReducer(undefined, { type: "@init" })).toMatchSnapshot();
  });
  it("reduces nothing", () => {
    expect(rootReducer(state, { type: "WHATEVER" })).toMatchSnapshot();
  });
  it("reduces ACTION", () => {
    expect(rootReducer(state, { type: "ACTION" })).toMatchSnapshot();
  });
});
