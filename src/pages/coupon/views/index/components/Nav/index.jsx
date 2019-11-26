import React, { Component } from 'react';
import './index.less';

export default class Search extends Component {
  render() {
    return (<div className="h-80 coupon-nav bg-white">
      <ul className="text-center lh-70 w-750 ovfl-x-scroll flex">
        <li className="plr-13 bs-bd mr-10">今日精选</li>
        <li className="plr-13 bs-bd mr-10">女装</li>
        <li className="plr-13 bs-bd mr-10">男装</li>
        <li className="plr-13 bs-bd mr-10">内衣</li>
        <li className="plr-13 bs-bd mr-10">彩妆</li>
        <li className="plr-13 bs-bd mr-10">配饰</li>
        <li className="plr-13 bs-bd mr-10">鞋品</li>
        <li className="plr-13 bs-bd mr-10">箱包</li>
        <li className="plr-13 bs-bd mr-10">儿童</li>
        <li className="plr-13 bs-bd mr-10">母婴</li>
        <li className="plr-13 bs-bd mr-10">居家</li>
        <li className="plr-13 bs-bd mr-10">美食</li>
        <li className="plr-13 bs-bd mr-10">数码</li>
        <li className="plr-13 bs-bd mr-10">家电</li>
        <li className="plr-13 bs-bd mr-10">车品</li>
        <li className="plr-13 bs-bd mr-10">文体</li>
        <li className="plr-13 bs-bd mr-10">其他</li>
      </ul>
    </div>);
  }
}