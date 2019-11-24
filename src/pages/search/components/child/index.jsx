import React, { Component } from 'react';

import './style.less';
import { square } from '../../../../utils/common/math';
import _ from 'lodash';
console.log(_.map());
export default class Child extends Component {
  constructor(){
    super();
    this.state = {
      a: 10,
      aList: square(2)
    };
  }
  render () {
    console.log(1);
    return (
    <div id="header">{ this.state.a }</div>
    );
  }
}