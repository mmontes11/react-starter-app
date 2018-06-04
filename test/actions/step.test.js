import { stepForward, jumpToStep } from "../../src/actions/step";

describe("actions/step", () => {
  describe("stepForward", () => {
    it("dispatches a step forward action", () => {
      const action = stepForward();
      expect(action).toBeAnAction();
      expect(action).toMatchSnapshot();
    });
  });
  describe("jumpToStep", () => {
    it("dispatches a jump to step action", () => {
      const action = jumpToStep(1);
      expect(action).toBeAnAction();
      expect(action).toMatchSnapshot();
    });
  });
});
