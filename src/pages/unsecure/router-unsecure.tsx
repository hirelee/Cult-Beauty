import * as React from "react";
import { Route, Switch } from "react-router-dom";
// Pages
import IndexPage from "./IndexPage/IndexPage";
import AccountPage from "./AccountPage/AccountPage";

function UnsecureRouter() {
  return (
    <Switch>
      <Route path="/" exact component={AccountPage} />
    </Switch>
  );
}

export default UnsecureRouter;
