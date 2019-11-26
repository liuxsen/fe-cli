/*
 * sku商品
 * @Author: liujianhui@lexue.com 
 * @Date: 2019-11-26 13:06:08 
 * @Last Modified by: jianhui
 * @Last Modified time: 2019-11-26 14:07:15
 */

import React, { Component } from 'react';
import './index.less';

export default class Sku extends Component {
  render() {
    return (<div className="w-367 bg-ccc h-600 sku mb-5 mr-5 flex-shrink-0">
      <div className="w-p100 h-374 pst-rlt">
        {/* 优惠券显示 */}
        <div className="pst-absl l-0 t-0 bg-red w-80 h-90 color-white text-center">
          <p className="fs-20 mt-2">优惠券</p>
          <p className="fs-28 mt-3">￥10</p>
        </div>
        <div className="pst-absl w-p100 h-40 l-0 b-0 r-0 fs-24 text-center tip color-white">已售5万</div>
      </div>
      <div className="fs-28 lh-38 plr-5"> 幼儿园名字贴姓名贴布刺绣宝宝可免缝校服衣贴条儿童定制印章防水</div>
      <div className="fs-24 origin-price plr-5 mt-10">现价 ￥28.00</div>
      <div className="fs-24 coupon-price plr-5 mt-20">券后<span>￥28.00</span></div>
    </div>);
  }
}