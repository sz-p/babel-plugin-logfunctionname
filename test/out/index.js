"use strict";

var _subCode = require("./subCode");

var _test = require("./node_modules/test");

var _lib = require("./node_modules/lib/lib");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function function_Function() {
  console.log("function_working:function_Function");
}

var function_VariableDeclarator = function function_VariableDeclarator() {
  console.log("function_working:function_VariableDeclarator");
};

var function_ArrowFunction = function function_ArrowFunction() {
  console.log("function_working:function_ArrowFunction");
};

var FunctionClass = function FunctionClass(name) {
  console.log("function_working:FunctionClass");
  this.name = name;

  this.seyHello = function () {
    console.log("function_working:seyHello");
    console.log("hello ".concat(this.name));
  };
};

var ClassFunction =
/*#__PURE__*/
function () {
  function ClassFunction(name) {
    _classCallCheck(this, ClassFunction);

    console.log("function_working:ClassFunction");
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

var functionClassItem = new FunctionClass('sz-p');
var classFunctionItem = new ClassFunction('sz-p');
function_Function();
function_VariableDeclarator();
function_ArrowFunction();
functionClassItem.seyHello();
classFunctionItem.seyHello(); // excluded

function doNotLogThis() {
  (0, _subCode.doNotLogThisFunctionName)();
  (0, _test.doNotLogTestFunctionNameInNodeModules)();
  (0, _lib.doNotLogLibFunctionNameInNodeModules)();
}

function excludeByRegExp_1() {}

function excludeByRegExp_2() {}

function excludeByRegExp_3() {}

doNotLogThis();
excludeByRegExp_1();
excludeByRegExp_2();
excludeByRegExp_3();