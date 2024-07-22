# This is Day-8 of Javascript .

# Topic: ES6+ Features

- **Activity 1**: Template literals

```javascript
// Task 1: Use temmplate  literals to create a string that includes variables for a person's name and age , and log the string to the console.
const name = "Udesh Regmi ";
const age = 21;
console.log(`The name is ${name}, and age is ${age}`);
```

```javascript
//Task 2 : Create a multilinestring using template literals and log it in console.
const InfoUser = (paidAmount, loggedInfo) => {
  let amountpaid = paidAmount;
  const isLoggedIn = loggedInfo;
  if (isLoggedIn) {
    console.log(`This person has successfully logged in in our website and he has paid a amount of  ${amountpaid} in our website, for creating a website for his own brand. He also assured that he will make collaborations with us in near future for his app based version . 
            `);
  } else {
    console.log(
      `He has only paid the amount i.e ${paidAmount} but he is not logged in `
    );
  }
};
InfoUser(12000, true);
```

Activity 2: Destructing

```javascript
// Task 3: Use array destructing  to extract the first and second element from the array of numbers and log the result in console.
const arr = [123, 2232, 4, 5, 6, 8, 8, 9, 0, 0, -2];
const [first, second] = arr;
console.log(first);
console.log(second);
```

```javascript
//Task 4: Use the Object destructing to extract the title and author from a bookobject and log the result to the console.
const book = {
  title: "Mero Euta katha ",
  author: "Me Myself is the author",
  releasedYear: 2100,
};
const { title, author } = book;
console.log("Title is ", title);
console.log("Author is ", author);
```

Activity 3: Use the Rest and Spread Operator

```javascript
//Task 5: Use the spread operator to create a new array that includes all the elements of an existing array plus additional elements,  and log the new array to the console.
const oldArr = [
  "Hello ",
  "Welcome",
  "To ",
  "My ",
  "Youtube",
  "Channel",
  true,
  10000,
];
const addinfo = ["No", "of", "subs", "400K"];
const newarr = [...oldArr, ...addinfo];
console.log(newarr);
console.log(String(newarr).split(",").join(" "));
```

```javascript
//Task 6: Use the rest operator in a function to accept the arbitary value of arguments sum them and return the result.
function RestOperator(...datas) {
  let sum = 0;
  for (const number of datas) {
    sum += number;
  }
  return sum;
}
console.log(RestOperator(2, 4, 6, 7, 8, 9), "Line lasr");
```

Activity 4: Default Parameters

```javascript
//Task7: Write a function  that takes two parameter and returns the product of two numbers  , with the second parameter value default to 1.Log the result of the calling this function without the second parameter .
function defaultParameter(data, def = 1) {
  return data * def;
}
console.log(defaultParameter(45));

console.log(defaultParameter(45, 2));
```

Activity 5: Enhanched Object Literals.

```javascript
//Task 8: Use the enhanched object literals to create an object with methods and properties, and log the object to the console.
const EnhanchedObject = {
  sum(a, b) {
    return a + b;
  },
  mult(a, b) {
    return a * b;
  },
  div(a, b) {
    return a / b;
  },
  sub(a, b) {
    return a - b;
  },
};
console.log(EnhanchedObject.sum(1, 3));
console.log(EnhanchedObject.mult(3, 3));
console.log(EnhanchedObject.div(8, 3));
console.log(EnhanchedObject.sub(2, 3));
```

```javascript
// Eg:2
const a = 1,
  b = 2,
  c = 4,
  d = 6,
  e = 10,
  f = 90,
  g = 990,
  h = 9,
  i = 9,
  j = 0;
const datas = {
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
};
console.log(datas);
```

```javascript
//Task 9: Create an object with computed property names based on variables and log the  object to the console.
const LAST_NAME = "lastname";
const userData = {
  firstName: "Tanishk",
  [LAST_NAME]: "raina",
};
console.log(userData.lastname);
console.log(userData[LAST_NAME]);
console.log(LAST_NAME);
console.log(userData);
```
