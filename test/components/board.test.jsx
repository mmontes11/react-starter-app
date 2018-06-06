import React from "react";
import { shallow } from "enzyme";
import Board from "components/board";

describe("components/board", () => {
  const squares = ["X", "X", "O", "X", "O", "O", "X", "O", "O"];
  const onClick = jest.fn();
  const wrapper = shallow(<Board squares={squares} onClick={() => onClick()} />);

  it("renders a board", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("simulates clicks", () => {
    wrapper
      .find("Square")
      .first()
      .simulate("click");

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
