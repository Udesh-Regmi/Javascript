//Activity 1: Understanding Promises
//Task 1: Create a promise that resolves with a message after 2 seconds  timeout and log the value to the console
const promise=  new  Promise ((resolve, reject)=>{
    setTimeout(async() => {
        await resolve(console.log('This is the resolved value after 2 seconds'))
    }, 2000);
})
console.log(promise)

//Task 2: Create a promise that rejects with a  error message after 2 seconds  timeout and log the value to the console
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(('Rejected'));
    }, 2000);
});
promise2
    .then(() => console.log('This is chain in promise 2 of task 2'))
    .catch((error) => console.error('Error occurred:', error));


// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulates the fetching data from a server. Chain the promise log a message in a specific order
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
fetchDataFromServer('Happiness')

async function dataget(){
    try{
const data =await fetch(`https://api.github.com/`)
console.log('Try Catch data status is ',data.status)
    }
    catch(err){
        console.log('Erorr occurred', err)
    }
}
dataget()


// Activity 3: Using async await
// Task 4: Write an async function that waits for a promise to resolve and log the resolved value
const promise3= new Promise(async(resolve, reject)=>{
await resolve('Data successfully fetched  for task 4')
})
console.log(promise3)

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error messages.
const asyncFunctionWithErrorHandling = async () => {
    const promise = new Promise(async(_, reject) => {
      await setTimeout(async() => {
       await reject(new Error('Promise rejected'));
      }, 2000);
    });
  
    try {
      const result = await promise;
      console.log('result is ', result);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  asyncFunctionWithErrorHandling();
  

// Activity 4: Fetching Data from an API
//Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
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
}
fetchRandomJokes();
//Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchRandomUsers = async () => {
    try {
        // Make a request to the API
        const response = await fetch('https://randomuser.me/api/');
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        
        console.log(responseData);
    } catch (error) {
        console.error('Error fetching random users:', error.message);
    }
}
fetchRandomUsers();

// Activity 5: Concurrent Promises
//Task 8: Use promise.all to wait for multiple promises to be resolved and log all of the values. 
const promiseA= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('reuigfwe90rifu')
    }, 1000);
})
const promiseB= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('reuigewewiurethgfdeuerhufwe90rifu')
    }, 1000);
})
const promiseC= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('wieurfdweu322345675432345643245643234543')
    }, 1000);
})
Promise.all([promiseA,promiseB,promiseC]).then((val)=>console.log(val))


// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promiseAB = new Promise((resolve) => setTimeout(() => resolve('Promise A resolved'), 1000));
const promiseBC= new Promise((resolve) => setTimeout(() => resolve('Promise B resolved'), 2000));
const promiseCA= new Promise((resolve) => setTimeout(() => resolve('Promise C resolved'), 3000));

Promise.race([promiseAB, promiseBC, promiseCA])
  .then((value) => {
    console.log(value);
  });
