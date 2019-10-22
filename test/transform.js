const babel = require('@babel/core');
const fs = require('fs');
const basePath = process.cwd();
const decodefilePath = basePath + '/test/source.js';
const encodefilePath = basePath + '/test/transformed.js'
const fileValue = fs.readFileSync(decodefilePath);
const enCode = babel.transform(fileValue);
fs.writeFileSync(encodefilePath, enCode.code);
