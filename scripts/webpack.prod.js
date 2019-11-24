process.env.NODE_ENV = 'production';

const { appPath } = require('./utils');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
    ]),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      // chunkFilename: '[id].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    })
  ]
});

module.exports = prodConfig;