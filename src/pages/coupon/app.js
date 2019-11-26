import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Index from './views/index/';
import Detail from './views/detail/';

export default class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/coupon/detail">
            <Detail/>
          </Route>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
        
      </Router>
    );
  }
}