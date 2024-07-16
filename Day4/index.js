// Activity 1 : For loop 
// Task 1: Write a program to print numbers from 1 to 10 using for loop
for(let i=1; i<=10; i++){
    console.log('i is ', i); 
}
//Task2: Write a program to print the multiplication table of 5 using for loop. 
let val= 5; 
for (let i= 1; i<=10; i++){
console.log(`${val}*${i}= `, val*i)
}

// Activity 2: While loop
//Task3 : Write a program to calculate the sum of numbers from 1 to 10 using while loop. 

let sum=0;
let i=1; 
while(i<=10)
{
    sum+=i; 
    i++;

}
console.log('Sum is ', sum)

//Task 4: Write a program to print number from 10 to 1 using while loop 
let i2= 10; 
while(i2>=1){
    console.log('i is ', i2)
    i2--;
}

// Activity 3: do-while loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop
let num= 1; 
do{
    console.log('Value of num using do-while is ', num)
    num++; 
}while(num<=5);

//Task6 : Write a program to find the factorial of a number using do-while loop. 
 function factorial(number){
    let val=1; 
        do{
         val*= number
            number--
        }while(number>1); 
        return val;
 }
 console.log(factorial(5))

 //Activity 4: Nested Loops.
// Task 7: Write a program to determine the following Pattern. 
// *
// **
// ***
// ****
// *****

for(let i=1; i<=5; i++){
    let pattern='';
    for(let j=1; j<=i; j++){
        pattern+='*'
    }
    console.log(pattern)
}

// Activity 5: Loop Control Statements
//Task 8:  Write a program to print number from 1 to 10 but skip  number 5 using continue

for (let i= 1; i<=10; i++){
    if(i=== 5){
        continue;  

    }
    else{
        console.log('i is ', i)
    }
}

// Task 9: Write a program to print numbers from 1 to 10 but stop the loop when the number is 7 using break statement
for (let i= 1; i<=10; i++){
    if(i===7)break;
    else
    console.log('Valus of i is ', i)
}

