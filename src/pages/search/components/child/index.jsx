import React, { Component } from 'react';

import './style.less';

export default class Child extends Component {
  constructor(){
    super();
    this.state = {
      a: 10
    };
  }
  render () {
    console.log(1);
    return (
    <div id="header">{ this.state.a }</div>
    );
  }
}