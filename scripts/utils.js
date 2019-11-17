const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const dirPath = process.cwd()+'/template/src/pages';
const subDir = fs.readdirSync(dirPath);
const cwdPath = process.cwd();

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
    filename: `[name]/index.js`,
    publicPath: '/'
  };
  return {
    entry,
    output,
    htmlWebpackPlugins
  };
};

const res =getEntry();
console.log(res);

const appPath = process.cwd() + '/template/src';

exports.getEntry = getEntry;
exports.appPath = appPath;