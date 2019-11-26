import React, { Component } from 'react';
import Layout from './Layout';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Child from './child';

export default class App extends Component {
  render () {
    return (
      <Router>
        <Layout>
          <Child/>
        </Layout>
      </Router>
    );
  }
}