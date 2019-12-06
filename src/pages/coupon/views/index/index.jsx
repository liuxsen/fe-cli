/*
 * 首页
 * @Author: liujianhui@lexue.com 
 * @Date: 2019-11-26 14:12:45 
 * @Last Modified by: jianhui
 * @Last Modified time: 2019-12-01 20:45:57
 */

import React from 'react';
import Layout from './components/Layout';
import Search from './components/Search';
import Nav from './components/Nav';
import SkuList from './components/SkuList';
import Footer from './components/Footer';
import {Test} from '../../hooks/Test';
import { useIndexHttp } from '../../apis/index';

export default function Index () {
  const {loading, data} = useIndexHttp();
  return (
    <Layout>
      {/* {
        loading ? 'loading' : 'not-loading'
      } */}
      {/* <Test/> */}
      <Search/>
      <Nav/>
      <SkuList skuList={data}/>
      <Footer/>
    </Layout>
  );
}