This is  Day-2 of JavaScript .

Topic: Operators in JavaScript

 Assignment 1 : Arithmetric Operator

 ```javascript 
 // Task 1: A program to add two numbers and log the result to the console.

//Use any of the technique to write functions
function sum(num1, num2){
    return num1 + num2; 
}

const sum= (num1, num2)=>(num1+ num2)
const sum = (num1, num2)=>num1+num2
const sum = (num1, num2)=>{
    return num1+num2;
}
let addition = sum(1, 30)
console.log('The addition is ', addition)
```
 ```javascript 
// Task 2: A program to subtract two numbers and log the result to the console.

function subtraction(num1, num2){
    return num1-num2;
}
 let difference= subtraction(10, 4)
 console.log('The difference is ', difference)
 ```
 ```javascript 
 // Task 3: A program to multiply two numbers and log the result to the console.
 function multiply(num1, num2){
    return num1*num2; 
    
 };
 let multipliedValue = multiply(4, 3)
 console.log('Multiplied value is ', multipliedValue)
```
 ```javascript 
  // Task 4: A program to divide two numbers and log the result to the console.
  function division(num1, num2){
    return num1/num2;
  }
  const dividedValue = division(4, 2)
  console.log("Divided Value is ", dividedValue)
```
 ```javascript 
 // Task 5: A program to find remainder when  two numbers are divided and log the result to the console.
 function remainder(num1, num2){
    return num1% num2
 }
 const remainderValue= remainder(3, 2)
 console.log("Remainder Value is ", remainderValue)
``` 

  Activity 2: Assignment Operator 

 ```javascript 
 // Task6: Using += to add a number to a variable and console the value 
function addusingAssignment(num1){
    return num1+= 10;
}
const resultaddAssignment= addusingAssignment(5)
console.log('ResultusingAssignment Operator += is', resultaddAssignment)

```
```javascript
// Task7: Using -= to add a number to a variable and console the value 
function subusingAssignment(num1){
    return --num1
}
const resultsubAssignment = subusingAssignment(4)
console.log('ResultsubAssignment of -- is ', resultsubAssignment)

```
Activity 3: Comparision Operators

```javascript
//Task 8: Write a program to compare two numbers using < and > and log the value to the console. 
function normalComparision(num1, num2){
    if(num1<num2){
        console.log(`${num1} is less than ${num2}`)
    }
    else if(num1>num2){
        console.log(`${num1} is greater than ${num2}`)
    }
    else{
        console.log(`${num1} and ${num2} are equal `)
    }
}
 normalComparision(2,1)
```
```javascript
 //Task 9: Write a program to compare two numbers using <= and >= and log the value to the console. 
 function doubleComparision(num1, num2){
    if(num1<=num2){
        console.log(`${num1} is less than ${num2}`)
    }
    else if(num1>=num2){
        console.log(`${num1} is greater than ${num2}`)
    }
    else{
        console.log(`${num1} and ${num2} are equal `)
    }
}

 doubleComparision(1,1)
```
```javascript
  //Task 10: Write a program to compare two numbers using == and === and log the value to the console. 
// ==: To find if the values are equal 
// ===: To find if the values and datatypes are equal 
const num= 10;
const str= '10'
if(num==str){
    console.log('Values are same and it provides ', num==str)
}
if(num===str){
    console.log('Values are same but the type are different so  it doesnot check this condition')
}
else{
    console.log('The values are same but of different types so it provides ', num===str)
}
```

Activity 5: Logical Operators
```javascript
//Task 11: Write a program  using && to combine two conditions and log the result to the console.
const ispresent = true;
const isStudent = true;
if(isStudent && ispresent){
    console.log('Attendence will be done')
}
```
```javascript
//Task 12: Write a program  using || to combine two conditions and log the result to the console.
const isLoggedIn= false;
const isSignedIn = true;
if(isLoggedIn || isSignedIn){
    console.log('User Has once logged in this site')
}
```
```javascript
//Task 13: Write a program using ! operator to neglet the condition and console the result 
const value = true;
if(!value){
    console.log('This code will run if the value is   true')
}
else{
    console.log('This code will run if the value is false')
}
```
Activity 6: Ternary Operator
```javascript
// Task 14: Write a program  that uses ternary operator to find out of the number is positive of negative and console the result. 

const val1= 90;
const val2= 70; 

(val1+ val2)>0 ? console.log('Positive'): console.log('Negative');
```

