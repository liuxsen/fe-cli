import React, { Component } from 'react';

export default class Child extends Component {
  constructor(){
    super();
    this.state = {
      a: 9
    };
  }
  render () {
    return (
    <div>{ this.state.a }</div>
    );
  }
}