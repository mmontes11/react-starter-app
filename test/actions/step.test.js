import { stepForward, jumpToStep } from "../../src/actions/step";

describe("Step actions", () => {
  describe("Step forward", () => {
    it("Dispatches a step forward action", () => {
      const action = stepForward();
      expect(action).toBeAnAction();
      expect(action).toMatchSnapshot();
    });
  });
  describe("Jump to step", () => {
    it("Dispatches a jump to step action", () => {
      const action = jumpToStep(1);
      expect(action).toBeAnAction();
      expect(action).toMatchSnapshot();
    });
  });
});
