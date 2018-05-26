import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import App from "./containers/app";
import rootReducer from "./reducers";

const middlewares = [thunk];
if (process.env.NODE_ENV !== "production") {
  middlewares.push(createLogger());
}
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
