const functionName = function () {

}
function functionHere() {

}
const arrowFunction = () => {

}
const ClassFunction = function (name, value) {
  this.name = name;
  this.value = value;
  this.getName = function () {
    return this.name;
  }
  this.getValue = function () {
    return this.value;
  }
}

class Class {
  constructor(name) {
    this.name = name;
  }
  seyHello() {
    console.log(`hello ${this.name}`)
  }
}
let classItem = new Class('sz-p')

functionName();
functionHere();
arrowFunction();
classItem.seyHello();

