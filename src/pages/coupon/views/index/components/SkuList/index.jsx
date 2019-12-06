/*
 * sku商品 列表
 * @Author: liujianhui@lexue.com
 * @Date: 2019-11-26 13:06:08
 * @Last Modified by: jianhui
 * @Last Modified time: 2019-12-01 20:38:19
 */

import React from 'react';

import Sku from '../Sku';

export default function SkuList ({skuList}) {
  return (<div className="pl-5 flex flex-wrap">
    {
      skuList && skuList.map((sku, i)=>{
        return <Sku key={i} skuItem={sku}/>;
      })
    }
  </div>);
}