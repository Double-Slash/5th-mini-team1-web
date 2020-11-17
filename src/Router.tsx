import React from "react";
import loadable from "@loadable/component";
import { Route, Switch } from "react-router-dom";

// page components
const Write = loadable(() => import("@pages/write"));

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/write" component={Write} />
      </Switch>
    </>
  );
};

export default Router;
