/*
 * sku商品 列表
 * @Author: liujianhui@lexue.com 
 * @Date: 2019-11-26 13:06:08 
 * @Last Modified by: jianhui
 * @Last Modified time: 2019-11-26 14:07:38
 */

import React, { Component } from 'react';

import Sku from '../Sku';

export default class SkuList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      aSkuList: [1,2,4,4,5,5,5,5,5,5,5,]
    };
  }
  render() {
    return (<div className="pl-5 flex flex-wrap">
      {
        this.state.aSkuList.map((sku, i)=>{
          return <Sku key={i}/>;
        })
      }
    </div>);
  }
}