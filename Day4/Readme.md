This is Day 4 of 30 days Javascript 
Topic : Loops in Javascript. 

Activity 1: For Loop

Task 1: Print Numbers from 1 to 10
```javascript
// This program prints numbers from 1 to 10 using a for loop.
for(let i = 1; i <= 10; i++) {
    console.log('i is', i);
}
```
Task 2: Print the Multiplication Table of 5
```javascript
// This program prints the multiplication table of 5 using a for loop.
let val = 5;
for(let i = 1; i <= 10; i++) {
    console.log(`${val} * ${i} =`, val * i);
}
```
Activity 2: While Loop

Task 3: Calculate the Sum of Numbers from 1 to 10
```javascript
// This program calculates the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let i = 1;
while(i <= 10) {
    sum += i;
    i++;
}
console.log('Sum is', sum);
```
Task 4: Print Numbers from 10 to 1
```javascript
// This program prints numbers from 10 to 1 using a while loop.
let i2 = 10;
while(i2 >= 1) {
    console.log('i is', i2);
    i2--;
}
```
Activity 3: Do-While Loop
Task 5: Print Numbers from 1 to 5
```javascript
// This program prints numbers from 1 to 5 using a do-while loop.
let num = 1;
do {
    console.log('Value of num using do-while is', num);
    num++;
} while(num <= 5);
```
Task 6: Find the Factorial of a Number
```javascript
// This program finds the factorial of a given number using a do-while loop.
function factorial(number) {
    let val = 1;
    do {
        val *= number;
        number--;
    } while(number > 1);
    return val;
}
console.log(factorial(5));
```
Activity 4: Nested Loops
Task 7: Print the Following Pattern
markdown

```javascript
*
**
***
****
*****
// This program prints the above pattern using nested loops.
for(let i = 1; i <= 5; i++) {
    let pattern = '';
    for(let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}
```
Activity 5: Loop Control Statements
Task 8: Skip Number 5 Using Continue
```javascript
// This program prints numbers from 1 to 10 but skips the number 5 using the continue statement.
for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        continue;
    } else {
        console.log('i is', i);
    }
}
```
Task 9: Stop the Loop When Number is 7 Using Break
```javascript
// This program prints numbers from 1 to 10 but stops the loop when the number is 7 using the break statement.
for(let i = 1; i <= 10; i++) {
    if(i === 7) break;
    else console.log('Value of i is', i);
}
```