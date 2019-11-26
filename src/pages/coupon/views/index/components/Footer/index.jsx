import React, { Component } from 'react';
import './index.less';

class Layout extends Component {
  render() {
    return (
      <div className="index-footer h-100 text-center bg-white">
        <ul className="flex">
          <li>
            <div className="w-60 h-60 m-auto">
              <img className="max" src="/static/images/tb.jpg" />
            </div>
            <div className="fs-20">淘宝券</div>
          </li>
          <li>
            <div className="w-60 h-60 m-auto">
              <img className="max" src="/static/images/jd.jpg" />
            </div>
            <div className="fs-20">京东券</div>
          </li>
          <li>
            <div className="w-60 h-60 m-auto">
              <img className="max" src="/static/images/pdd.jpg" />
            </div>
            <div className="fs-20">多多券</div>
          </li>
          <li>
            <div className="w-60 h-60 m-auto">
              <img className="max" src="/static/images/search.png" />
            </div>
            <div className="fs-20">超级搜</div>
          </li>
          <li>
            <div className="w-60 h-60 m-auto">
              <img className="max" src="/static/images/profile.png" />
            </div>
            <div className="fs-20">个人中心</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Layout;