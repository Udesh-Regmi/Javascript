# This is Day 12 of Javascript.

# Topic : Error Handling

## Activities

## Activity 1: Basic Error Handling with try/catch

### Task 1: Write a function that intentionally throws an error and use a try/catch block tohandle it and print a message to the console

```js
function throwError() {
  throw new Error("Something went wrong!");
}
try {
  throwError();
} catch (error) {
  console.log(error.message);
}
```

### Task 2: Write a function that divides 2 numbers and throws an error if the denominator is zero and use a try/catch block to handle it and print a message to the console

```js
function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero!");
  }
  return numerator / denominator;
}
try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
}
```

## Activity 2: Finally Block

### Task 3: Write a script that includes a try/catch block and a finally block. Log message in try catch and finally block and see the order of execution

```js
const data = 10;
if (data > 0) {
  try {
    console.log("Try block", data / 2);
  } catch (error) {
    data / 0;
    console.log("Error in catch block");
  } finally {
    console.log("Finally block", data / 1);
  }
}
```

## Activity 3: Custom Error Objects

### Task 4 : Write a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle using a try/catch block. Log the error message to the console.

```js
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}
function throwCustomError() {
  throw new CustomError("custom Error");
}
try {
  throwCustomError();
} catch (error) {
  console.log(error.message);
}
```

### Task 5: Write a function that validates a user input (eg, Checking if the string is not empty etc.) and throw a custom error if the validation fails. Handle the error using a try/catch block and log the error message to the console.

```js
class StringError extends Error {
  constructor(message) {
    super(message);
    this.name = "StringError";
  }
}
function validateInput(input) {
  if (input === "") {
    throw new StringError("Input cannot be empty!");
  }
  return input;
}
try {
  validateInput("");
} catch (error) {
  console.log(error.message);
}
```

## Activity 4: Error Handling in Promises

### Task 6: Create a promise that randomly resolves or rejects. Use a .catch() block to handle the error and log the error message to the console.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5
      ? resolve(console.log("Resolved Function "))
      : reject(new Error("Rejected Function"));
  }, 1000);
});
promise
  .then(() => {
    console.log("Promise resolved!");
  })
  .catch((error) => {
    console.log(error);
  });
```

### Task 7: Use try/catch block and async/await to handle the error in the promise. Log the error message to the console.

```js
const promiseFunc = async () => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5
          ? resolve(console.log("Resolved Function  "))
          : reject(new Error("Rejected Function"));
      }, 1000);
    });
  } catch (error) {
    console.log(error.message);
  }
};
promiseFunc();
```

## Activity 5: Use Graceful Error Handling in fetch API

### Task 8: Use fetch API to make a GET request to an API endpoint. Handle the error using a .catch() block and log the error message to the console.

```js
fetch("api.gtihub.com")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error.message);
  });
```

### Task 9 : Use fetch API to make a GET request from an API endpoint. Handle the error using a try/catch block and log the error message to the console.

```js
const fetchData = async () => {
  try {
    const response = await fetch("api.gtihub.com");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
fetchData();
```
