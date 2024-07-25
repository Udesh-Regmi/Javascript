# Activity 1: Creating and exporting a module
##  Task 1: Create a module that exports a function of add two numbers. Import the module and use it to another script.
In module File
```js
function add(a, b) {
    return a + b;
  }
  module.exports= add;
  ```
In main file
  ```js 
const add = require('../Activity1/Task1.js')
console.log(add(23,23))
  ```
  ## Task 2: Create a module that exports an object representing a person. with properties and methods.Import and use this module in another script.
In module filee
```js
const PersonObj={
    name:'Tom',
    age:20,
    getAge:function(){
        return this.age;
    },
    greet:function(){
        return `Hello ${this.name}`;
    }
}
module.exports=PersonObj;
```
In main file
```js
const PersonObj= require('../Activity1/Task2.js')
console.log(PersonObj)
console.log(PersonObj.greet())
console.log(PersonObj.getAge())

```
