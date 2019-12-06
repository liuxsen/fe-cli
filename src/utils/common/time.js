/**
 * 获取 YYYY-MM-DD HH:MM:SS 格式
 * @param {number}} val timestamp
 */
export const timeToDate = (val) => {
  if (Number(val) < 0) {
    return '/';
  }
  if (isNaN(val) || val === 0) {
    return '/';
  } else if (val === null) {
    return '/';
  }
  let date = new Date(val);
  const Year = `${date.getFullYear()}`;
  const Month = `${
    date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
  }`;
  const Day = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`;
  const Hour = `${
    date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  }`;
  const Minute = `${
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  }`;
  const Second = `${
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  }`;
  return `${Year}-${Month}-${Day} ${Hour}:${Minute}:${Second}`;
};