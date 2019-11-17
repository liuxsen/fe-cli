console.log('babel----config');
console.log(process.env.APP_LIBRARY);

module.exports = function (api) { 
  api.cache(true);
  const presets = [];
  const plugins = [];
  if(process.env.APP_LIBRARY === 'REACT'){
    presets.push('@babel/preset-react');
    plugins.push('transform-class-properties');
  }
  return {
    presets,
    plugins
  };
};