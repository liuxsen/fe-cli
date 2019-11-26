import React, { Component } from 'react';
import './index.less';

export default class Search extends Component {
  render() {
    return (<div className="header-search ptb-18 pl-30 pr-15">
      <div className="w-570 h-60 search-input dspl-inbl">
        <input className="w-p100 h-60 p-0 m-0 bs-bd plr-10" type="text" placeholder="请输入关键字搜索 京东/綯宝/天喵 优惠券"/>
      </div>
      <span className="w-56 fs-28 ml-24 color-white">榜单</span>
    </div>);
  }
}