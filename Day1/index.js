// Acivity 1: Variable Declaration 

// Task 1 : Declare a variable using var  , assign it a number and log the value in console. 

var a = 10;
console.log("a = " + a);


// Task 2: Declare a variable usind let, assign it a string and log the value to the console. 

let myName = "Shivam";
console.log("myName = " + myName);


// Activity 2: Constant Declaration

// Task 3:  Declare a variable using const, assign its value to a boolean and log the value in console.

const bool = false;
console.log(' Boolean Value is ', + bool)


// Activity 3: Data Types

// Task 4:  Create variable of different datatypes ( number, boolean , string, array , object )and log each variable's types using typeof operator . 

let myNumber = 100;
let boolval = false;
let mypost = 'Programmer';
let arr = [
    1,
    2,
    3,
    'hello ',
     {
        'Name': 'Shivam',
    }]

let myObj= { 
    'rollno': 4,
    'name':'Rajan',
    'ispresent':false,

}
console.log(`Type of myNumber i.e ${myNumber} is `,  typeof(myNumber));
console.log(`Type of boolval i.e ${boolval} is `,  typeof(boolval));
console.log(`Type of mypost i.e ${mypost} is `,  typeof(mypost));
console.log(`Type of arr i.e ${arr} is `,  typeof(arr));
console.log(`Type of myObj i.e ${JSON.stringify(myObj)} is `,  typeof(myObj));


// Activity 4 : Reassigning Variables

//Task 5: Declare a variable using let assign it to a value, reassign it to a new value and log both of the values  to console

let reassign = 'Rajan';
console.log('Initial value', reassign)

reassign= " Ranjit";

console.log('Final Value is ', reassign)


//Scoping Concept of Curly Brackets and Differentiate between var and let. 
//Using var keyword
var myUsername= 'Rajan'; 

{
    var myUsername= 'Rabin';
    console.log('Inside Brackets is', myUsername)

}
console.log('Outside bracket value is ', myUsername)

//Using let keyword
let myUsername= 'Rajan'; 

{
    let myUsername= 'Rabin';
    console.log('Inside Brackets is', myUsername)

}
console.log('Outside bracket value is ', myUsername)

//Activity 5: Understanding const 
//Task 6 : Try reassigning a value declared with const and observe the error

const myVal= 10;

myVal= 20;
console.log('MyVAl value is ', myVal)

//This error message will popup : TypeError: Assignment to constant variable.








