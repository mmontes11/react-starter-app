import React from "react";
import { shallow } from "enzyme";
import Square from "components/square";

describe("components/square", () => {
  const onClick = jest.fn();
  const wrapper = shallow(<Square value="X" onClick={() => onClick()} />);

  it("renders a square", () => {
    expect(wrapper.text()).toBe("X");
    expect(wrapper).toMatchSnapshot();
  });
  it("simulares clicks", () => {
    wrapper.find("button").simulate("click");

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
