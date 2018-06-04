import { nextPlayer } from "../../src/actions/nextActions";

describe("Next actions", () => {
  describe("Next player", () => {
    it("Dispatches next player actions", () => {
      const thunk = nextPlayer();
      const dispatch = jest.fn();
      let step = 0;
      const getState = jest.fn().mockImplementation(() => {
        step += 1;
        return { step };
      });
      expect(thunk).toBeAThunk();
      thunk(dispatch, getState);
      thunk(dispatch, getState);
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(getState).toHaveBeenCalledTimes(2);
      expect(dispatch.mock.calls).toMatchSnapshot();
      expect(getState.mock.calls).toMatchSnapshot();
    });
  });
});
