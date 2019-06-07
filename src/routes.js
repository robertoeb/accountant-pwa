import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/jobs" exact component={Jobs} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
