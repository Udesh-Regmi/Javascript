// Activity 1:Creating and exporting a module
//Task 2: Create a module that exports an object representing a person. with properties and methods.Import and use this module in another script.
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