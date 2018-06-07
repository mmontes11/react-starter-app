import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Main from "components/main";

describe("components/header", () => {
  const state = {
    step: 0,
    xIsNext: true,
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
  };

  it("renders a main in / path", () => {
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]} keyLength={0}>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find("Game")).toHaveLength(1);
    expect(wrapper.find("About")).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a main in /whatever path", () => {
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/whatever"]} keyLength={0}>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find("Game")).toHaveLength(1);
    expect(wrapper.find("About")).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a main in /game path", () => {
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/game"]} keyLength={0}>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find("Game")).toHaveLength(1);
    expect(wrapper.find("About")).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders a main in /about path", () => {
    const store = configureStore([])(state);
    const wrapper = mount(
      <MemoryRouter initialEntries={["/about"]} keyLength={0}>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper.find("Game")).toHaveLength(0);
    expect(wrapper.find("About")).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
