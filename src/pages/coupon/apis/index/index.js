import { useHttp } from "../../hooks/useHttp";
import { timeToDate } from '../../../../utils/common/time';
import md5 from 'md5';

function sortAscii(obj){
  let arr = [];
  let num = 0;
  // eslint-disable-next-line
  for (var i in obj) {
    arr[num] = i;
    num++;
  }
  let sortArr = arr.sort();
  let sortObj = {};
  // eslint-disable-next-line
  for (var i in sortArr) {
    sortObj[sortArr[i]] = obj[sortArr[i]];
  }
  return sortObj;
}

// 获取首页数据
export const useIndexHttp = (options) => {
  // https://router.jd.com/api?v=1.0&method=jd.union.open.goods.jingfen.query&access_token=&app_key=e509fc70b255e7a5271ae4d31c58a244&sign_method=md5&format=json&timestamp=2019-11-30 23:57:46&sign=D241416DBD3E36F47CB688749890C205&param_json={"goodsReq":{"sort":"asc","pageSize":"3","eliteId":"1","sortName":"price","pageIndex":"1"}}
  const app_key = escape('e509fc70b255e7a5271ae4d31c58a244');
  const appSecret = escape('9ddbf2fdfbe24828bfc70a66bd54d1ae');
  const method = escape('jd.union.open.goods.jingfen.query');
  const timestamp = timeToDate(new Date().getTime());
  const v = escape('1.0');
  const sign_method = escape('md5');
  const format = escape('json');
  const param_json = JSON.stringify({goodsReq:{sort:'asc',pageSize:20,eliteId:1,sortName:'price',pageIndex:1}});
  let params =  sortAscii({
    timestamp,
    v,
    sign_method,
    format,
    method,
    param_json,
    // access_token:'',
    app_key,
  });

  let signStr = '';
  Object.keys(params).forEach(key=>{
    signStr+= key + params[key];
  });

  signStr = `${appSecret}${signStr}${appSecret}`;
  // eslint-disable-next-line
  // console.log(signStr)
  const sign = md5(signStr).toUpperCase();
  console.log(sign);
  params.sign = sign;
  params.param_json = param_json;
  const {loading, data, error} = useHttp({
    url: `/api`,
    method: 'get',
    options: {
      params
    }
  });
  return {
    loading,
    data: data ? JSON.parse(data.jd_union_open_goods_jingfen_query_response.result).data : null,
    error
  };
};