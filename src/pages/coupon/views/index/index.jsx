/*
 * 首页
 * @Author: liujianhui@lexue.com 
 * @Date: 2019-11-26 14:12:45 
 * @Last Modified by: jianhui
 * @Last Modified time: 2019-11-26 16:18:37
 */
import React, { Component } from 'react';

import Layout from './components/Layout';
import Search from './components/Search';
import Nav from './components/Nav';
import SkuList from './components/SkuList';
import Footer from './components/Footer';

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Search/>
        <Nav/>
        <SkuList/>
        <Footer/>
      </Layout>
    );
  }
}