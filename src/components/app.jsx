import React, { Fragment } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Header from "./header";
import Main from "./main";
import "../assets/style.scss";

const App = ({ store }) => (
  <Provider store={store}>
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default App;
