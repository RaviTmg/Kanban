import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Board from "./components/Board";
// The Routing Component providing all the routing Configuration

const Routes = props => {
  return (
    <BrowserRouter>
      <Switch>
        {
          /* It's setup at the default index route */
          <Route exact path="/" component={Board} />
          // <Route exact path="/login" component={Login} />
        }
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
