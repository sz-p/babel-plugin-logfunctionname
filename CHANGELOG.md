# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/sz-p/babel-plugin-logfunctionname/commits/master) for commit guidelines.

<a name="0.0.1"></a>
## [0.0.1](https://github.com/sz-p/babel-plugin-logfunctionname/commit/fa01dbd11c6612051442172fceec9ed7ba3cc4a0) (2019-10-24)

### Features
- [init] build base features

<a name="0.0.2"></a>
## [0.0.2](https://github.com/sz-p/babel-plugin-logfunctionname/commit/7f0a84874969692d0d9913cb2f5b30a824ecc44d) (2019-10-26)

### Features
- [AssignmentExpression] log functionName in AssignmentExpression example this.getName = function () {}

<a name="0.0.3"></a>
## [0.0.3]() (2019-10-28)

### Features
- [options] add some options to easy use
|Key|Type|Description|Example|
|:-:|:-:|:-:|:-:|
|enable|boolean|enable or disable plugin|`false`|
|functionWorkingHint|string|The string before functionName|`function_working:`|
|excludeFunctionsName|array|exclude functions by function name|`['doNotLogThis', /^excludeByRegExp/]`|
|excludeFilesName|array|exclude functions by file name|`['subCode', /node_modules/]`|
