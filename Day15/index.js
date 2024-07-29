// Activity 1: Understanding Closures
// Task 1 : Write a function that returns  value is ther function, where the inner function accesses a variable of the outer function's scope. Call the inner function and log the result. 
function userLoggedIn(user) {
    let isLoggedIn = '';
   function inner() {
    if (isLoggedIn) {
        console.log(`User ${user} is logged in`);
    }
    else{
        console.log(`User ${user} is value is t logged in`);
    }
  }
  return inner;
}
const outer = userLoggedIn('Selijaah');
outer();


//Task 2: Create a closure that maintains a private counter . Implement a function to increment and get a current value of a counter. 
function counter() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}
const counterFunc = counter();
console.log(`Counter value is  ${counterFunc()}`)
console.log(`Counter value is  ${counterFunc()}`)
console.log(`Counter value is  ${counterFunc()}`)
console.log(`Counter value is  ${counterFunc()}`)

// Activity 2: Practical Closures
// Task 3: Write a function that generate a unique ID. Use a closure to keep track of the last generated ID and increment with each call. 

function generateID(){
    let id = Math.floor(Math.random() * 1000);
    let trackId = []
    function getID(){
        trackId.push(id);
        return id++;

    }
    return [getID, trackId];
}
const [getID, trackId] = generateID();
console.log(`ID is ${getID()}`);
console.log(`Track array is ${trackId}`);
console.log(`ID is ${getID()}`);
console.log(`Track array is ${trackId}`);
console.log(`ID is ${getID()}`);
console.log(`Track array is ${trackId}`);
console.log(`ID is ${getID()}`);
console.log(`Track array is ${trackId}`);
console.log(`ID is ${getID()}`);
console.log(`Track array is ${trackId}`);


// Task 4: Create a closure that captures a user's name and returns a function that greets the user bu their name. 
function greetUser(name) {
    return function greet() {
        console.log('Hello ' + name);
    }
}
const greet = greetUser('Rwoeid');
greet();

// Activity 3: Closures in Loops
//Task 5:  Write a function that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createArrayOfFunctions() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(function () {
            console.log('This is function ' + i);
        });
    }
    return array;
}
const values = createArrayOfFunctions();
values.forEach(function (value, index) {
    value();
    console.log('Index is ' + index);
});

// Activity 4: Module Pattern
//Task 6: Use closure to create a simple module for managing a collection of items. Implement method to add, remove and list items. 
function outerModule(){
    let items=[];
    function addItem(item){
        items.push(item);
    }
    function removeItem(item){
        items.splice(items.indexOf(item),1);
    }
    function listItems(){
        return items;
    }
    return {addItem, removeItem, listItems};
}
const data = outerModule();
data.addItem('Red Wine');
data.addItem('Green Tea');
data.addItem('Black Coffee');
console.log(data.listItems());
data.removeItem('Green Tea');
data.listItems();
console.log(data.listItems());



// Activity 5: Memoization
//Task 7: Write a function that memoizes the results of another  function. Use a closure to store the result of previous computations.
function memoize(fn) {
    let cache = {};
    return function () {
        let key = JSON.stringify(arguments);
        if (key in cache) {
            console.log(`Cached result for ${key} is ${cache[key]}`);
            console.log(' Cache is ', cache);

            return cache[key];
        }
        else {
            let result = fn.apply(this, arguments);
            cache[key] = result;
            console.log(`Cached result for ${key} is ${result}`);
            console.log(' Cache is ', cache);

            return result;
        }
    }
}
const slowfunction= function () {
   return 'Slow Function';
}
const memovalues = memoize(slowfunction);
console.log(memovalues(10, 20));
console.log(memovalues(10, 20));
console.log(memovalues(1, 20));
console.log(memovalues(1, 20));
console.log(memovalues(1, 20));
console.log(memovalues(1, 20));
console.log(memovalues(1, 20));
console.log(memovalues(21, 89));
console.log(memovalues(20, 0));

  
//Task 8: Create a memoized version of a function that calculates a factorial of a number. 

/**
 * Creates a memoized version of the factorial function.
 * @returns {function} A memoized factorial function.
 */
function memoizedFactorial() {
    let cache = {};
    return function factorial(num) {
        if (num in cache) {
            return cache[num];
        } else {
            if (num === 0 || num === 1) {
                cache[num] = 1;
            } else {
                cache[num] = num * factorial(num - 1);
            }
            return cache[num];
        }
    };
}
const factorial = memoizedFactorial();
console.log(factorial(5));
console.log(factorial(6));
