/*
 * sku商品
 * @Author: liujianhui@lexue.com 
 * @Date: 2019-11-26 13:06:08 
 * @Last Modified by: jianhui
 * @Last Modified time: 2019-12-01 21:27:00
 */

import React from 'react';
import {useHistory} from 'react-router-dom';
import './index.less';

export default function Sku ({skuItem}) {
  let history = useHistory();
  if(!skuItem.couponInfo) skuItem.couponInfo = {};
  if(!skuItem.couponInfo.couponList) skuItem.couponInfo.couponList = [];
  const counponInfo = skuItem.couponInfo.couponList[0];
  if(!skuItem.imageInfo) skuItem.imageInfo = {};
  if(!skuItem.imageInfo.imageList) skuItem.imageInfo.imageList = [];
  const imageItemUrl = skuItem.imageInfo.imageList[0] && skuItem.imageInfo.imageList[0].url || '';
  const handleClickSku = () => {
    history.push(`/coupon/detail/${skuItem.skuId}`);
  };
  return (<div className="w-367 h-600 sku mb-5 mr-5 flex-shrink-0">
    <div className="w-p100 h-374 pst-rlt text-center bg-white" onClick={handleClickSku}>
      <div className="lh-374">
        <img src={imageItemUrl} className="max" />
      </div>
      {/* 优惠券显示 */}
      <div className="pst-absl l-0 t-0 bg-red w-80 h-90 color-white text-center">
        <p className="fs-20 mt-2">优惠券</p>
        <p className="fs-28 mt-3">￥{counponInfo.discount}</p>
      </div>
      <div className="pst-absl w-p100 h-40 l-0 b-0 r-0 fs-24 text-center tip color-white">已售 {skuItem.inOrderCount30DaysSku}</div>
    </div>
    <div className="fs-28 lh-38 plr-5 text-ellipsis-3">{skuItem.skuName}</div>
    <div className="fs-24 origin-price plr-5 mt-10">现价 ￥{skuItem.priceInfo.price}</div>
    <div className="fs-24 coupon-price plr-5 mt-20">券后<span>￥{skuItem.priceInfo.price - counponInfo.discount}</span></div>
  </div>);
}