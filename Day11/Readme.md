# This is Day 11 of Javascript
# Topics:Promises and Async/Await in JavaScript

## Activity 1: Understanding Promises

### Task 1: Create a Promise that Resolves
This task demonstrates creating a promise that resolves with a message after a 2-second timeout.
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(async () => {
        await resolve(console.log('This is the resolved value after 2 seconds'));
    }, 2000);
});
console.log(promise);
```


# Promises and Async/Await in JavaScript

## Activity 1: Understanding Promises

### Task 1: Create a Promise that Resolves
This task demonstrates creating a promise that resolves with a message after a 2-second timeout.
```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(async () => {
        await resolve(console.log('This is the resolved value after 2 seconds'));
    }, 2000);
});
console.log(promise);
```
### Task 2: Create a Promise that Rejects
This task demonstrates creating a promise that rejects with an error message after a 2-second timeout and handles the error.
```javascript
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(('Rejected'));
    }, 2000);
});
promise2
    .then(() => console.log('This is chain in promise 2 of task 2'))
    .catch((error) => console.error('Error occurred:', error));

```

## Activity 2: Chaining Promises
### Task 3: Fetch Data from Server
Simulate fetching data from a server using chained promises to log messages in a specific order.
```javascript
function fetchDataFromServer(category) {
    return fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`)
        .then(response => {
            console.log('Data fetched from server');
            return response.json();
        })
        .then(data => {
            console.log('Data parsed from JSON');
            return data;
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}
fetchDataFromServer('Happiness');
```
```javascript
async function dataget() {
    try {
        const data = await fetch(`https://api.github.com/`);
        console.log('Try Catch data status is', data.status);
    } catch (err) {
        console.log('Error occurred', err);
    }
}
dataget();

```
## Activity 3: Using Async/Await
### Task 4: Awaiting a Promise
Write an async function that waits for a promise to resolve and log the resolved value.
```javascript
const promise3 = new Promise(async (resolve, reject) => {
    await resolve('Data successfully fetched for task 4');
});
console.log(promise3);


```

### Task 5: Handling Rejected Promises
Write an async function that handles a rejected promise using try-catch and logs the error message.
```javascript
const asyncFunctionWithErrorHandling = async () => {
    const promise = new Promise(async (_, reject) => {
        await setTimeout(async () => {
            await reject(new Error('Promise rejected'));
        }, 2000);
    });

    try {
        const result = await promise;
        console.log('result is', result);
    } catch (error) {
        console.error(error.message);
    }
};
asyncFunctionWithErrorHandling();

```
## Activity 4: Fetching Data from an API
### Task 6: Fetch API with Promises
Use the fetch API to get data from a public API and log the response data to the console using promises.
```javascript
const fetchRandomJokes = () => {
    fetch('https://api.freeapi.app/public/randomjokes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(responseData => {
            console.log(responseData);
        })
        .catch(error => {
            console.error('Error fetching random jokes:', error.message);
        });
};
fetchRandomJokes();

```
### Task 7: Fetch API with Async/Await
Use the fetch API to get data from a public API and log the response data to the console using async/await.
```javascript
const fetchRandomUsers = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('Error fetching random users:', error.message);
    }
};
fetchRandomUsers();

```

## Activity 5: Concurrent Promises
### Task 8: Promise.all
Use Promise.all to wait for multiple promises to be resolved and log all of the values.
```javascript
const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise A resolved');
    }, 1000);
});
const promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise B resolved');
    }, 1000);
});
const promiseC = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise C resolved');
    }, 1000);
});
Promise.all([promiseA, promiseB, promiseC]).then((val) => console.log(val));

```

## Task 9: Promise.race
Use Promise.race to log the value of the first promise that resolves among multiple promises.
```javascript
const promiseAB = new Promise((resolve) => setTimeout(() => resolve('Promise A resolved'), 1000));
const promiseBC = new Promise((resolve) => setTimeout(() => resolve('Promise B resolved'), 2000));
const promiseCA = new Promise((resolve) => setTimeout(() => resolve('Promise C resolved'), 3000));

Promise.race([promiseAB, promiseBC, promiseCA])
    .then((value) => {
        console.log(value);
    });

```



