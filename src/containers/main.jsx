import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Game from "./game";
import About from "../components/about";

const Main = () => (
  <main>
    <Switch>
      <Route path="/game" component={Game} />
      <Route path="/about" component={About} />
      <Route render={() => <Redirect to="/game" />} />
    </Switch>
  </main>
);

export default Main;
