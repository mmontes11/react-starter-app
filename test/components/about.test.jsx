import React from "react";
import { shallow } from "enzyme";
import About from "components/about";

describe("components/about", () => {
  it("renders an about", () => {
    const wrapper = shallow(<About />);

    expect(wrapper).toMatchSnapshot();
  });
});
