# babel-plugin-logfunctionname
A babel plugin to insert a log in function to show the function name

if you join in a large project but with no document, this plugin maybe could help you;

## In
```javascript
const functionName = function () {

}
function functionHere() {

}
const arrowFunction = () => {

}
class ClassFunction {
  constructor(name) {
    this.name = name;
  }
  seyHello() {
    console.log(`hello ${this.name}`)
  }
}
let classFunctionItem = new ClassFunction('sz-p')

functionName();
functionHere();
arrowFunction();
classFunctionItem.seyHello();
```
## out
```javascript
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var functionName = function functionName() {
  console.log("function_working:functionName");
};

function functionHere() {
  console.log("function_working:functionHere");
}

var arrowFunction = function arrowFunction() {
  console.log("function_working:arrowFunction");
};

var ClassFunction =
/*#__PURE__*/
function () {
  function ClassFunction(name) {
    console.log("function_working:ClassFunction");

    _classCallCheck(this, ClassFunction);

    this.name = name;
  }

  _createClass(ClassFunction, [{
    key: "seyHello",
    value: function seyHello() {
      console.log("function_working:seyHello");
      console.log("hello ".concat(this.name));
    }
  }]);

  return ClassFunction;
}();

var classFunctionItem = new ClassFunction('sz-p');
functionName();
functionHere();
arrowFunction();
classFunctionItem.seyHello();
```
## Installation
```sh
$ yarn add babel-plugin-logfunctionname -D
```
## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-plugin-logfunctionname"]
}
```

### Via CLI

```sh
$ babel --plugins babel-plugin-logfunctionname script.js
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['babel-plugin-logfunctionname']
});
```

## Options

|Key|Type|Description|Example|
|:-:|:-:|:-:|:-:|
|enable|boolean|enable or disable plugin|`false`|
|functionWorkingHint|string|The string before functionName|`function_working:`|
|excludeFunctionsName|array|exclude functions by function name|`['doNotLogThis', /^excludeByRegExp/]`|
|excludeFilesName|array|exclude functions by file name|`['subCode', /node_modules/]`|

## test
```sh
$ yarn install
$ yarn transform
$ yarn runOut
```
