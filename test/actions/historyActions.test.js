import { setHistory } from "../../src/actions/historyAction";

describe("History actions", () => {
  describe("Set history", () => {
    it("Dispatches a set history action", () => {
      const action = setHistory(0, "X", 0);
      expect(action).toBeAnAction();
      expect(action).toMatchSnapshot();
    });
  });
});
