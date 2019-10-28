import { doNotLogThisFunctionName } from './subCode';
import { doNotLogTestFunctionNameInNodeModules } from './node_modules/test';
import { doNotLogLibFunctionNameInNodeModules } from './node_modules/lib/lib';
function function_Function() {

}
const function_VariableDeclarator = function () {

}
const function_ArrowFunction = () => {

}

const FunctionClass = function (name) {
  this.name = name;
  this.seyHello = function () {
    console.log(`hello ${this.name}`)
  }
}

class ClassFunction {
  constructor(name) {
    this.name = name;
  }
  seyHello() {
    console.log(`hello ${this.name}`)
  }
}

let functionClassItem = new FunctionClass('sz-p')
let classFunctionItem = new ClassFunction('sz-p')

function_Function();
function_VariableDeclarator();
function_ArrowFunction();
functionClassItem.seyHello();
classFunctionItem.seyHello();

// excluded
function doNotLogThis() {
  doNotLogThisFunctionName();
  doNotLogTestFunctionNameInNodeModules();
  doNotLogLibFunctionNameInNodeModules();
}
function excludeByRegExp_1() { }
function excludeByRegExp_2() { }
function excludeByRegExp_3() { }
doNotLogThis();
excludeByRegExp_1();
excludeByRegExp_2();
excludeByRegExp_3();