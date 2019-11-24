console.log('babel----config');
console.log(process.env.APP_LIBRARY);
const presets = [];
const plugins = ['lodash'];
if(process.env.APP_LIBRARY === 'REACT'){
  presets.push('@babel/preset-react');
  plugins.push('transform-class-properties');
}

module.exports = {
  presets,
  plugins
};
