
// Activity 1 : Function Declaration 
// Task 1: Write a function to find if a given number is even or odd and log the result to the console
function oddEven(num){
    if(num % 2 === 0){
        console.log('The given number ', num , 'is  Even')
    }
    else{
        console.log('The given number',num ,' is odd ')
    }
}
oddEven(5)

//Task 2: Write a function to  calculate the square of a number and return the result 

function squareNumber(num){
    return num*num;
}
let square = squareNumber(78)
console.log('Square of the given number is ', square)


// Activity 2: Function Expression

// Task 3:  Write a function to find the largest among two number andlog the result to console

function Largest(num1, num2){
    if(num1>num2){
        console.log(`${num1} is larger`)
        return num1;
    }
    else if(num1<num2){
        console.log(`${num2} is larger`)
        return num2; 

    }
    else{
        console.log(`${num1} and ${num1}  are equal `)

    }
}
Largest(2,5);


// Task 4:  Write a function to concatinate two string and return the result

function concatinate(str1, str2)
{
    return `${str1} ${str2}`
    return str1 + str2;
}

let str= concatinate('Hello ', 'This ')
console.log(str)

//Activity 3: Arrow Function

//Task 5: Write an arrow function to calculate the sum of two numbers and return the result to the console.
// const sum = (num1, num2)=>{
//     return num1+num2;
// }
// const sum = (num1, num2)=>(
//     return num1+num2;
// )
const sum = (num1, num2 )=>num1+ num2
console.log(sum(8, 2))

//Task 6 : Write an arrow function to find if a string contains a special character and return a boolean value . 

const specialCharacter= (str)=>{
    const specialCharacter = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '|'
    ]
    return specialCharacter.some(char=> str.includes(char))
}
console.log('Special Character is ', specialCharacter('sd'))

//Activity 4:  Function Parameter and Default Values
// Task 7: Wirte a function that takes two parameters and return their product. Provide default value for second parameter 

const multiple = (num1, num2=9) =>{
    return num1 * num2; 
}

console.log(multiple(12)
)

// Task 8: Write a function that takes person's name and age and return a greetign message . Make age as default value 

const Greetings = (name, age=10)=>{
    return console.log(`Hello ${name}, how is your day going . Age is ${age}`)
}
Greetings('Porsche')

// Activity 5: Higher Order function 

//  Task 9: Write a high order function that takes a function and a Number,  and calls the function that many times.

const higherOrderFunction = ( func, num )=>{
    for (let i=0; i< num; i++){
        func()
    }
}
const description= ()=>console.log('Porsche 911 GT3RS ')

higherOrderFunction(description, 8); 

//Task 10: Write a function that takes two functions and a value , applies the first function to the value and then applies the second function to the result. 

const topFunc= (func1, func2, value)=>{
   let result=  func1(value)
  return func2(func1(value))
}
function func1(print){
    console.log ('Print value of params', print);
    return print;
}
function func2(print){
    const reversed=  print.split('').reverse().join('')
    console.log ('Print value of params in reverse',reversed);
    return reversed;
}
topFunc(func1, func2, 'Porsche')
