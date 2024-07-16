// Activity 1
// Task 1 Write a program to check if the given number is positive negative or zero and console the value . 
const submitbtn= document.getElementById('btn');
submitbtn.addEventListener('click',()=>{
    const num1 = document.getElementById('number1').value;
    if(num1<1){
        document.getElementById('output').innerHTML= 'The value is negative'
        console.log('Negative value')
    }
    else if(num1>1){
        document.getElementById('output').innerHTML= 'The value is positive'
        console.log('Positive Value')
    }
    else{
        document.getElementById('output').innerHTML= 'The value is zero'
        console.log('Zero value')
    }   
})

// Task 2 Write a program to check if a person is eligible to vote (age>=18) and print the value to console

const submitbtn2= document.getElementById('btn2')

submitbtn2.addEventListener('click',()=>{
    const output2= document.getElementById('output2')
    const age= document.getElementById('age').value

    if(age>=18 && age<=100){
output2.innerHTML=`The person can vote in election`
console.log('The person can vote')

    }
    else if(age<18 && age>0){
        output2.innerHTML=`The person cannot vote in election.`
        console.log('The person cannot vote')
    }
    else{
output2.innerHTML= `Please Enter a valid age.`
console.log('The provided information is not valid')
    }
})

//Activity 3: Nested if-else condition.
// Task 3: Write a program to find the largest among three numbers using nested-if else statement

document.getElementById('btn3').addEventListener('click',()=>{
    const num1= document.getElementById('num1').value
    const num2= document.getElementById('num2').value
    const num3= document.getElementById('num3').value

    let g;
    if(num1<num2){
        g=num2;
        if(g>num3){
        document.getElementById('result3').innerHTML=`Value of ${num2} is largest of all`
        }  
    }
    else if(num1>num2){
        g=num1;
        if(g>num3){
            document.getElementById('result3').innerHTML=`Value of ${num1} is largest of all`
        }
    }
    else if(num3>num2){
        g=num3;
        if(g>num1){
            document.getElementById('result3').innerHTML=`Value of ${num3} is largest of all`
        }
    }
    else{
        document.getElementById('result3').innerHTML=`Enter valid value`

    }
})

// Activity 3: Switch Case
// Task 4: Write a program to determine the day of the week based on number 1-7 and log the name to console.
document.getElementById('btn4').addEventListener('click',()=>{
    let choosenday= document.getElementById('choosenday').value
    //This is changed into number for convenience only 
   const intnum= Number(choosenday)

    switch(choosenday){
        case '1':
            console.log('Today is Sunday')
            break;
        case '2':
            console.log('Today is Monday')
            break;
        case '3':
            console.log('Today is Tuesday')
            break;
        case '4':
            console.log('Today is Wednesday')
            break;
        case '5':
            console.log('Today is Thursday')
            break;
        case '6':
            console.log('Today is Friday')
            break;
        case '7':
            console.log('Today is Saturday')
            break;
         default:
            console.log('Enter value between 1-7 only')
            break;
    }

})

// Task5: Write a program that uses switch case to assign a grade (A,B,C,D,F) based on the score and log the value to console.
document.getElementById('btn5').addEventListener('click',(e)=>{
    const marks = Number(document.getElementById('grade').value);
    console.log(typeof marks)
    switch (true) {
        case marks>90 && marks<=100:
        console.log('A')
        break;
        case marks>80 && marks <=90:
        console.log('B')
        break;
        case marks>70 && marks <=80:
        console.log('C')
        break;
        case marks>60 && marks <=70:
        console.log('D')
        break;
        case marks>50 && marks <=60:
        console.log('F')
        break;
        case marks<50 && marks >0:
        console.log('Not Graded')
        break;
        default:
        console.log('Enter valid score')

    }
})

// Activity 4: Conditional (Ternary Operator)
let marks= 90;
( marks>90 && marks <=100 )? console.log('A+'):(marks >80 && marks <=90) ? console.log('A'): (marks >70 && marks <=80)? console.log('B+'):(marks >60 && marks <=70) ?console.log('B'): console.log('Not Graded for us')
//Task6: Write a program to find if the given number is even or odd using Ternary Operator.
(marks%2===0)? console.log('Even Number'):console.log('odd Number');



//Activity 5: Combining Condition
//Task 7 : Write a program to check if a year is leap year or not using multiple condition (divisible by 4, but not 100 unless also divisible by 400 ) and log the result to console.
const year =Math.floor( Math.random()*10000)
console.log(year)

if(year%4===0){
    if(!(year%100===0) || (year %400 ===0 )){
    console.log(`${year} is a leap year`)
    }
    else{
        console.log('Divisible only by 4')
    }
}
else{
    console.log('Not divisible by 4')
}
