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

