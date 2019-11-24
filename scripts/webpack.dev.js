const {appPath} = require('./utils');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    disableHostCheck: false,
    contentBase: appPath+'/static',
    historyApiFallback: {
      rewrites: [
        // { from: /^\/$/, to: '/views/landing.html' },
        // { from: /^\/subpage/, to: '/views/subpage.html' },
        // { from: /./, to: '/views/404.html' }
      ]
    }
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin({
    // })
  ]
});

module.exports = devConfig;