import stepReducer from "reducers/step";

describe("reducers/step", () => {
  it("has a default state", () => {
    expect(stepReducer(undefined, { type: "@init" })).toBe(0);
  });
  it("reduces nothing", () => {
    expect(stepReducer(0, { type: "WHATEVER" })).toBe(0);
  });
  it("reduces STEP_FORWARD", () => {
    expect(stepReducer(0, { type: "STEP_FORWARD" })).toBe(1);
  });
  it("reduces JUMP_TO_STEP", () => {
    expect(stepReducer(0, { type: "JUMP_TO_STEP", step: 5 })).toBe(5);
  });
});
