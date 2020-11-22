import React from "react";
import { BrowserRouter } from "react-router-dom";

import StyleReset from "@utils/styles/reset";
import Router from "./Router";

const App = () => {
  return (
    <>
      <StyleReset />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
