import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import StyleReset from "@utils/styles/reset";
import RootReducer from "./store";
import Router from "./Router";

const store = () => {
  const middlewares: Middleware[] = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const config = createStore(RootReducer, enhancer);
  return config;
};

const App = () => {
  return (
    <>
      <StyleReset />
      <Provider store={store()}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
