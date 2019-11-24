const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// npm install extract-text-webpack-plugin@next -S 
// npm install extract-text-webpack-plugin -S 会报错
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader','less-loader']
        })
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
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('style_[name].css')
  ]
};