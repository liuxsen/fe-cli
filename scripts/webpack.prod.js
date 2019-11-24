process.env.NODE_ENV = 'production';

const { appPath } = require('./utils');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base');
// 压缩css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

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
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // 压缩css
      new OptimizeCSSAssetsPlugin({})
    ]
  },
});

module.exports = prodConfig;