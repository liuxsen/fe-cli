process.env.NODE_ENV = 'develepment';

const {appPath} = require('./utils');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    publicPath: '/', // 打包的文件放在的目录
    disableHostCheck: false,
    contentBase: appPath,
    historyApiFallback: {
      rewrites: [
        // { from: /^\/$/, to: '/views/landing.html' },
        // { from: /^\/subpage/, to: '/views/subpage.html' },
        // { from: /./, to: '/views/404.html' }
      ]
    }
  },
  plugins: [
  ]
});

module.exports = devConfig;