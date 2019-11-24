const { appPath } = require('./utils');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base');

const prodConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: appPath+'/static',
        to: 'static'
      }
    ])
  ]
});

module.exports = prodConfig;