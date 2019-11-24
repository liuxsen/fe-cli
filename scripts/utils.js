// isProd 值是字符串

const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const dirPath = process.cwd()+'/src/pages';
const subDir = fs.readdirSync(dirPath);
const cwdPath = process.cwd();

export const isProd = process.env.NODE_ENV === 'production';

const getEntry = function () {
  const entry = {};
  const htmlWebpackPlugins = [];
  subDir.forEach((dir)=>{
    entry[dir] = `${dirPath}/${dir}/index.js`;
    htmlWebpackPlugins.push(new HTMLWebpackPlugin({
      template: `${dirPath}/${dir}/index.html`,
      filename: `${dir}/index.html`,
      chunks: [dir, 'common', 'vendor'],
      favicon: `${dirPath}/${dir}/favicon.ico`
    }));
  });
  const output = {
    path: cwdPath + '/dist',
    filename: `[name]/[${isProd ? 'chunkhash:9' : 'hash'}].js`,
    publicPath: '/' // htmlwebpackplugin生成的路径前缀
  };
  return {
    entry,
    output,
    htmlWebpackPlugins
  };
};

const res =getEntry();
console.log(res);

const appPath = process.cwd() + '/src';

exports.getEntry = getEntry;
exports.appPath = appPath;