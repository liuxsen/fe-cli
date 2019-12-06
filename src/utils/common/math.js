export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}

/**
 * 排序对象
 * @param {obj} obj json对象
 */
export const ksort = function (obj){
  let keys = Object.keys(obj).sort();
  let sortedObj = {};

  keys.forEach((key, i)=>{
    sortedObj[keys[i]] = obj[keys[i]];
  });

  return sortedObj;
};


export const objToQuery = (obj) => {
  let str = '';
  // eslint-disable-next-line
  for (let key in obj) {
    if (str !== '') {
      str += '&';
    }
    if (key) {
      str += key + '=' + encodeURIComponent(obj[key]);
    }
  }
  return str;
};