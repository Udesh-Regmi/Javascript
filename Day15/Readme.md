#### This is Day 15 of 30 days of Javascript

## Activity 1: Understanding Closures

### Task 1: Outer and Inner Function
This task demonstrates how closures allow an inner function to access variables from an outer function's scope.
```javascript
function userLoggedIn(user) {
    let isLoggedIn = '';
    function inner() {
        if (isLoggedIn) {
            console.log(`User ${user} is logged in`);
        } else {
            console.log(`User ${user} is not logged in`);
        }
    }
    return inner;
}

const outer = userLoggedIn('Selijaah');
outer();
```

### Task 2: Counter with Closure
This task demonstrates creating a private counter using closures.

```javascript
function counter() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}

const counterFunc = counter();
console.log(`Counter value is ${counterFunc()}`);
console.log(`Counter value is ${counterFunc()}`);
console.log(`Counter value is ${counterFunc()}`);
console.log(`Counter value is ${counterFunc()}`);
```

## Activity 2: Practical Closures

### Task 3: Unique ID Generator
This task demonstrates generating unique IDs using closures.

```javascript
function generateID() {
    let id = Math.floor(Math.random() * 1000);
    let trackId = [];
    function getID() {
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
```

### Task 4: User Greeting
This task demonstrates creating a closure that captures a user's name and returns a greeting function.

```javascript
function greetUser(name) {
    return function greet() {
        console.log('Hello ' + name);
    };
}

const greet = greetUser('Rwoeid');
greet();
```

## Activity 3: Closures in Loops

### Task 5: Array of Functions with Closure
This task demonstrates creating an array of functions that each log their index using closures.

```javascript
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
```

## Activity 4: Module Pattern

### Task 6: Item Management Module
This task demonstrates creating a simple module for managing a collection of items using closures.

```javascript
function outerModule() {
    let items = [];
    function addItem(item) {
        items.push(item);
    }
    function removeItem(item) {
        items.splice(items.indexOf(item), 1);
    }
    function listItems() {
        return items;
    }
    return { addItem, removeItem, listItems };
}

const data = outerModule();
data.addItem('Red Wine');
data.addItem('Green Tea');
data.addItem('Black Coffee');
console.log(data.listItems());
data.removeItem('Green Tea');
console.log(data.listItems());
```

## Activity 5: Memoization

### Task 7: Memoizing Results
This task demonstrates how to memoize the results of another function using closures.

```javascript
function memoize(fn) {
    let cache = {};
    return function () {
        let key = JSON.stringify(arguments);
        if (key in cache) {
            console.log(`Cached result for ${key} is ${cache[key]}`);
            console.log('Cache is', cache);
            return cache[key];
        } else {
            let result = fn.apply(this, arguments);
            cache[key] = result;
            console.log(`Cached result for ${key} is ${result}`);
            console.log('Cache is', cache);
            return result;
        }
    };
}

const slowFunction = function () {
    return 'Slow Function';
};
const memoizedValues = memoize(slowFunction);
console.log(memoizedValues(10, 20));
console.log(memoizedValues(10, 20));
console.log(memoizedValues(1, 20));
console.log(memoizedValues(1, 20));
console.log(memoizedValues(21, 89));
console.log(memoizedValues(20, 0));
```

### Task 8: Memoized Factorial
This task demonstrates creating a memoized version of a function that calculates the factorial of a number.

```javascript
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

console.log(factorial(5)); // Output: 120
console.log(factorial(6)); // Output: 720
```