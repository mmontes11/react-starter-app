import expect from "expect";
import { stepForward, jumpToStep } from "../../src/actions/stepActions";

describe("Step actions", () => {
  describe("Step forward", () => {
    it("Creates a step forward action", () => {
      const action = stepForward();
      expect(action).toBeAnAction();
      expect(action).toMatchSnapshot();
    });
  });
  describe("Jump to step", () => {
    it("Creates a jump to step action", () => {
      const action = jumpToStep(1);
      expect(action).toBeAnAction();
      expect(action).toMatchSnapshot();
    });
  });
});
