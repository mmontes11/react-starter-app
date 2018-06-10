import React from "react";
import { mount } from "enzyme";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import rootReducer from "reducers";
import Game from "containers/game";

describe("contaiers/game", () => {
  const initialState = {
    step: 0,
    xIsNext: true,
    history: [
      {
        squares: Array(9).fill(null),
      },
    ],
  };
  const firstStepState = {
    step: 1,
    xIsNext: false,
    history: [
      {
        squares: Array(9).fill(null),
      },
      {
        squares: ["X", ...Array(8).fill(null)],
      },
    ],
  };

  it("renders a game in initial state", () => {
    const store = configureStore([])(initialState);
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <Provider store={store}>
          <Game />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("renders a game in first step", () => {
    const store = configureStore([])(firstStepState);
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <Provider store={store}>
          <Game />
        </Provider>
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("simulates clicks in squares", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <Provider store={store}>
          <Game />
        </Provider>
      </MemoryRouter>,
    );

    expect(store.getState()).toEqual(initialState);

    for (let i = 0; i < 8; i += 1) {
      if (i === 1) {
        expect(store.getState()).toEqual(firstStepState);
      }
      wrapper
        .find("Square")
        .at(i)
        .simulate("click");
    }

    expect(store.getState()).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
  });

  it("simulates a click in history", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const wrapper = mount(
      <MemoryRouter keyLength={0}>
        <Provider store={store}>
          <Game />
        </Provider>
      </MemoryRouter>,
    );

    expect(store.getState()).toEqual(initialState);

    wrapper
      .find("Square")
      .first()
      .simulate("click");

    expect(store.getState()).toEqual(firstStepState);

    wrapper
      .find(".button-moves")
      .first()
      .simulate("click");

    expect(store.getState()).toMatchSnapshot();
  });
});
