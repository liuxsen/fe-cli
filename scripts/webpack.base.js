const devMode = process.env.NODE_ENV === 'development';
console.log('devMOde', devMode);
// 提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { getEntry } = require('./utils');
const baseConfig = getEntry();
require('dotenv').config();

console.log(baseConfig);

module.exports = {
  entry: baseConfig.entry,
  output: baseConfig.output,
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js|x$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: [{
          loader: 'file-loader',
          options: {}
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    ...baseConfig.htmlWebpackPlugins,
    
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '/css/[name].css' : 'assets/css/[name].[contenthash:8].css',
      chunkFilename: devMode ? 'css/[id].css' : 'assets/css/[id].[contenthash:8].css',
    })
  ]
};