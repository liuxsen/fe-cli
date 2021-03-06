process.env.NODE_ENV = 'develepment';

const {appPath, getEntry} = require('./utils');
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
      rewrites: getEntry().historyApiFallbackRewrites
    },
    proxy: {
      '/api': {
        target: 'https://router.jd.com',
        changeOrigin: true,
      },
      '/v1': {
        target: 'https://cnodejs.org/api',
        changeOrigin: true,
      }
    }
  },
  plugins: [
  ]
});

module.exports = devConfig;