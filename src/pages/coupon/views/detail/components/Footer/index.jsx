/*
 * 商品详情底部模块
 * @Author: liujianhui@lexue.com 
 * @Date: 2019-11-26 15:43:21 
 * @Last Modified by: jianhui
 * @Last Modified time: 2019-11-26 16:38:11
 */

import React, { Component } from 'react';
import './index.less';

export default class DetailFooter extends Component {
  render () {
    return (
      <div className="detail-footer pst-fx b-0 l-0 r-0 h-100 bg-white">
        <ul className="flex fs-24 text-center">
          <li className="w-150 clearfix">
            <img className="mr-12 fl-left mt-30 ml-20" src="/static/images/show_home.png" />
            <span className="fl-left mt-33">首页</span>
          </li>
          <li className="w-150 clearfix">
            <img className="mr-12 fl-left mt-30 ml-20" src="/static/images/show_share.png" />
            <span className="fl-left mt-33">乐享</span>
          </li>
          <li className="w-448 h-70 text-center bg-white color-white flex rounded-40 ovfl-hd lh-70 mt-15">
            <div className="w-228 h-p100 click-buy bs-bd" style={{color: '#FE9F69'}}>点击购买</div>
            <div className="w-228 h-p100 open-app">手淘APP打开</div>
          </li>
        </ul>
      </div>
    );
  }
}