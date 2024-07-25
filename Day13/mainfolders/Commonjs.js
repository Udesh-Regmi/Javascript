
// Task 1: Create a module that exports a function of add two numbers. Import the module and use it to another script.
console.log('-------------------------------------------Task 1----------------------------------------')
const add = require('../Activity1/Task1.js')
console.log(add(23,23))


//Task 2: Create a module that exports an object representing a person. with properties and methods.Import and use this module in another script.
console.log('-------------------------------------------Task 2----------------------------------------')
const PersonObj= require('../Activity1/Task2.js')
console.log(PersonObj)
console.log(PersonObj.greet())
console.log(PersonObj.getAge())

// Task 3: Create a module that exports multiple function using named exports. Import and use this module in another script.
console.log('-------------------------------------------Task 3----------------------------------------')
const { multiple, division} = require('../Activity2/Task3.js')
console.log('Multiple is ', multiple(21,3455))
console.log('division is ', division(21,5))

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties. 
console.log('-------------------------------------------Task 5---------------------------------------')
let {mongodbConnection, dataFetch}= require('../Activity3/Task5.js')
mongodbConnection= false;
if(mongodbConnection){
    dataFetch('Salary')
}
else{
    dataFetch('Non-Salaried')
}
// Task 6: Install a third party module (eg, lodash ) using npm . Import and use the function from this module script
console.log('-------------------------------------------Task 6---------------------------------------')
const {sortedArr, findzeroage} = require('../Activity4/Task6.js')
console.log(sortedArr)
console.log(sortedArr.map(x=>x.name))
console.log(findzeroage)

//Task 7: Install a third party module (eg. axios)using npm . import and use this module to make a network request to the script. 
console.log('-------------------------------------------Task 7---------------------------------------')
const fetchData= require('../Activity4/Task7.js')
console.log(fetchData('Udesh-Regmi'))

