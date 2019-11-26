// isProd 值是字符串
const isProd = process.env.NODE_ENV === 'production';

const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const dirPath = process.cwd()+'/src/pages';
const subDir = fs.readdirSync(dirPath);
const cwdPath = process.cwd();


const getEntry = function () {
  const entry = {};
  const htmlWebpackPlugins = [];
  const historyApiFallbackRewrites  = [];
  subDir.forEach((dir)=>{
    entry[dir] = `${dirPath}/${dir}/index.js`;
    htmlWebpackPlugins.push(new HTMLWebpackPlugin({
      template: `${dirPath}/${dir}/index.html`,
      filename: `${dir}/index.html`,
      chunks: ['vendors', 'commons', dir],
      favicon: `${dirPath}/${dir}/favicon.ico`
    }));
    // 开发模式，404 fallback
    historyApiFallbackRewrites.push({
      form: new RegExp("^\/" + dir,"gim"),
      to: `/${dir}/index.html`
    });
  });
  const output = {
    path: cwdPath + '/dist',
    filename: `[name]/[${isProd ? 'chunkhash:9' : 'hash'}].js`,
    publicPath: '/' // htmlwebpackplugin生成的路径前缀
  };
  return {
    entry,
    output,
    htmlWebpackPlugins,
    historyApiFallbackRewrites
  };
};

const appPath = process.cwd() + '/src';

exports.getEntry = getEntry;
exports.appPath = appPath;