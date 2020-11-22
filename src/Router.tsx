import React from "react";
import loadable from "@loadable/component";
import { Route, Switch } from "react-router-dom";

// page components
const Write = loadable(() => import("@pages/Write"));

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/write" component={Write} exact />
      </Switch>
    </>
  );
};

export default Router;
