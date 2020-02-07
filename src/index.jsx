import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";

import App from "./App";
import reducer from "./reducers/index";

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);

export const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// module.exports = { store };
