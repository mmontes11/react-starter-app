import React, { Fragment } from "react";
import Header from "../components/header";
import Game from "./game";
import "../assets/style.scss";

const App = () => (
  <Fragment>
    <Header />
    <Game />
  </Fragment>
);

export default App;
