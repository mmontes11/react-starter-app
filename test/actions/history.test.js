import { setHistory } from "../../src/actions/history";

describe("actions/history", () => {
  describe("setHistory", () => {
    it("dispatches a set history action", () => {
      const action = setHistory(0, "X", 0);
      expect(action).toBeAnAction();
      expect(action).toMatchSnapshot();
    });
  });
});
