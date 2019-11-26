/*
 * 商品详情
 * @Author: liujianhui@lexue.com 
 * @Date: 2019-11-26 14:16:33 
 * @Last Modified by: jianhui
 * @Last Modified time: 2019-11-26 16:21:26
 */
import React, { Component } from 'react';
import './index.less';

import Footer from './components/Footer';

export default class Detail extends Component {
  render () {
    return (
      <div className="detail pb-100">
        <div className="w-750 h-750 bg-red">banner</div>
        <div className="h-90 flex lh-90 bs-bd plr-20 pst-rlt timer">
          <div className="fs-12">券后价格</div>
          <div className="fs-20 ml-20">￥23.90</div>
          <div className="fs-20 ml-20">
            <span>原价</span>
            <span>￥23.90</span>
          </div>
          {/* 倒计时 */}
          <div className="pst-absl w-200 h-90 bg-red r-0">xx</div>
        </div>
        {/* 商品标题 */}
        <div className="fs-30 plr-10 bs-bd mt-10">
          <img className="w-32 h-32 mr-10 vtal-md" src="/static/images/tb.jpg" />
          <span>小样乳酸菌哪吒联名版风味酸牛奶整箱送礼盒装饮料饮品100ml*20瓶</span>
        </div>
        {/* 领取券 */}
        <div className="plr-10 get-coupon h-180 flex">
          <div className="w-500 h-180 pt-50 bs-bd text-center color-white">
            <p className="fs-28">26元优惠券</p>
            <p className="fs-24">使用期限：2019-11-26 2019-11-11</p>
          </div>
          <div className="color-white lh-180 w-200 text-center">立即领券</div>
        </div>
        <div className="flex flex-between fs-24 plr-10">
          <div className="">此券剩余 73%</div>
          <div className="">月销7.6万件</div>
        </div>
        {/* 店铺头部 */}
        <div className="mt-20 bd-bt">
          <div className="ptb-10 plr-20 flex flex-between">
            <div className="flex">
              <div className="w-120 h-120 bg-red">
              xxx
              </div>
              <div className="w-290 fs-14 ml-10">
                <p className="store-title">小样官方旗舰店</p>
                <p>
                  <img className="w-120" src="/static/images/tm_store.png" />
                </p>
              </div>
            </div>
            <div className="w-200">
              <span className="fs-28 lh-120 dspl-inbl">进入店铺</span>
              <img className="w-70 h-70 vtal-md" src="/static/images/go.png" />
            </div>
          </div>
        </div>
        {/* 店家描述 */}
        <div className="flex flex-around fs-24 lh-100 bd-bt" style={{color: '#555'}}>
          <p>宝贝描述:4.9</p>
          <p>卖家服务:4.8</p>
          <p>物流服务:4.8</p>
        </div>

        {/* 宝贝描述 */}
        <div className="p-10">
          <ul className='sku-desc fs-28'>
            <li>味道好(1207)</li>
            <li>味道好(1207)</li>
            <li>味道好(1207)</li>
            <li>味道好(1207)</li>
            <li>味道好(1207)</li>
            <li>味道好(1207)</li>
          </ul>
        </div>
        {/* 底部功能 */}
        <Footer/>
      </div>
    );
  }
}