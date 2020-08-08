import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import DefaultLayoutRoute from "./templates/main/Body";

import Home from "./pages/Home";
import Publication from "./pages/Publication";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <DefaultLayoutRoute exact path="/" component={Home} />
        <DefaultLayoutRoute path="/publication" component={Publication} />
      </Switch>
    </Router>
  );
}
