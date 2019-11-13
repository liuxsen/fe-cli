const {appPath} = require('./utils');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base');

const devConfig = merge(baseConfig, {
  mode: 'development',
  devServer: {
    disableHostCheck: false,
    contentBase: appPath+'static',
    historyApiFallback: {
      rewrites: [
        // { from: /^\/$/, to: '/views/landing.html' },
        // { from: /^\/subpage/, to: '/views/subpage.html' },
        // { from: /./, to: '/views/404.html' }
      ]
    }
  }
});

module.exports = devConfig;