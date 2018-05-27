import React, { Fragment } from "react";
import Header from "./header";
import Game from "../containers/game";
import "../assets/style.scss";

const App = () => (
  <Fragment>
    <Header />
    <Game />
  </Fragment>
);

export default App;
