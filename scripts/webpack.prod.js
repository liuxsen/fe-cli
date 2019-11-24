process.env.NODE_ENV = 'production';

const { appPath } = require('./utils');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base');
// 压缩css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// tree shaking 压缩js
const TerserPlugin = require('terser-webpack-plugin');

const prodConfig = merge(baseConfig, {
  mode: 'none',
  // devtool: 'inline-source-map',
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
      new TerserPlugin(),
      // 压缩css
      new OptimizeCSSAssetsPlugin({})
    ],
    // tree shaking,标记未使用的模块
    usedExports: true,
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        vendors: {
          filename: 'assets/js/[name].js',
          test: /(react|react-dom)/,
          name: 'vendors',
          chunks: 'all'
        },
        commons: {
          filename: 'assets/js/[name].js',
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
});

module.exports = prodConfig;