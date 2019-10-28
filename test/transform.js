const babel = require('@babel/core');
const fs = require('fs');
const basePath = process.cwd();

const inFiles = basePath + '/test/in/';
const directoryList = [inFiles];

let inFilesPath = [];
let outFilesPath = [];

while (directoryList.length) {
  let path = directoryList[0];
  let filse = fs.readdirSync(path);
  directoryList.shift();
  filse.forEach((item) => {
    if (fs.lstatSync(path + item).isDirectory() === true) {
      directoryList.push(path + item + '/');
      let outDirPath = basePath + '/test/out/' + path.substring(inFiles.length, path.length) + item;
      if (!fs.existsSync(outDirPath)) {
        fs.mkdirSync(outDirPath)
      }
    } else {
      inFilesPath.push(path + item);
    }
  })
}

inFilesPath.forEach((item) => {
  outFilesPath.push(basePath + '/test/out/' + item.substring(inFiles.length, item.length))
})

for (let i = 0; i < inFilesPath.length; i++) {
  let outCode = babel.transformFileSync(inFilesPath[i]);
  fs.writeFileSync(outFilesPath[i], outCode.code);
}

