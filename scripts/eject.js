const cwd = process.cwd();
console.log(cwd);
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const commander = require('commander');
const program = new commander.Command();
program.version('0.0.1');

program
 .option('-i, --init <path>', 'project of path', '.')
 .parse(process.argv);

const programOpts = program.opts();
const initPath = programOpts.init;

console.log(initPath);

const sWillInitPath = path.join(cwd, initPath);
const bHasDir = fs.pathExistsSync(sWillInitPath);
if(bHasDir) {
  console.log('目标文件夹不为空，请切换项目路径，或者名称');
  return;
}

inquirer.prompt([
  {
    type: 'confirm',
    name: 'initPath',
    message: `即将在 ${sWillInitPath} 初始化项目?`,
    default: true
  }
]).then((answers)=>{
  if(answers.initPath) {
    // 新建项目目录
    fs.ensureDir(sWillInitPath)
      .then(()=>{
        // 同步模板
        fs.copySync(`${cwd}/template/src`, `${sWillInitPath}/src`);
        console.log('新建成功');
      }).catch(err => {
        console.error(err);
      });
      
  } else{
    console.log('exit');
  }
});