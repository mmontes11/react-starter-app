import React, { Fragment } from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import Header from "components/header";

const Dummy = () => <div>Dummy</div>;

describe("components/header", () => {
  it("renders a header in / path", () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Fragment>
          <Header />
          <Route path="/game" component={Dummy} />
          <Route path="/about" component={Dummy} />
        </Fragment>
      </MemoryRouter>,
    );

    expect(wrapper.find(Dummy)).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders a header in /game path", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/game"]} keyLength={0}>
        <Fragment>
          <Header />
          <Route path="/game" component={Dummy} />
          <Route path="/about" component={Dummy} />
        </Fragment>
      </MemoryRouter>,
    );

    expect(wrapper.find('[href="/game"]').hasClass("header-link-active")).toBeTruthy();
    expect(wrapper.find('[href="/about"]').hasClass("header-link-active")).toBeFalsy();
    expect(wrapper.find(Dummy)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a header in /about path", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/about"]} keyLength={0}>
        <Fragment>
          <Header />
          <Route path="/game" component={Dummy} />
          <Route path="/about" component={Dummy} />
        </Fragment>
      </MemoryRouter>,
    );

    expect(wrapper.find('[href="/game"]').hasClass("header-link-active")).toBeFalsy();
    expect(wrapper.find('[href="/about"]').hasClass("header-link-active")).toBeTruthy();
    expect(wrapper.find(Dummy)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
