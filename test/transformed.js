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

var ClassFunction = function ClassFunction(name, value) {
  console.log("function_working:ClassFunction");
  this.name = name;
  this.value = value;

  this.getName = function () {
    console.log("function_working:getName");
    return this.name;
  };

  this.getValue = function () {
    console.log("function_working:getValue");
    return this.value;
  };
};

var Class =
/*#__PURE__*/
function () {
  function Class(name) {
    console.log("function_working:Class");

    _classCallCheck(this, Class);

    this.name = name;
  }

  _createClass(Class, [{
    key: "seyHello",
    value: function seyHello() {
      console.log("function_working:seyHello");
      console.log("hello ".concat(this.name));
    }
  }]);

  return Class;
}();

var classItem = new Class('sz-p');
functionName();
functionHere();
arrowFunction();
classItem.seyHello();