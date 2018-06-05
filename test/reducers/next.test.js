import nextReducer from "reducers/next";

describe("reducers/history", () => {
  it("has a default state", () => {
    expect(nextReducer(undefined, { type: "@init" })).toBeTruthy();
  });
  it("reduces nothing", () => {
    expect(nextReducer(true, { type: "WHATEVER" })).toBeTruthy();
  });
  it("reduces NEXT_PLAYER", () => {
    expect(nextReducer(true, { type: "NEXT_PLAYER", step: 0 })).toBeTruthy();
    expect(nextReducer(true, { type: "NEXT_PLAYER", step: 1 })).toBeFalsy();
  });
});
