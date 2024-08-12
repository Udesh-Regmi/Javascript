// Local and Session Storage
// Activity 1: Understanding Local Storage

// Task 1: Save a string value to local storage and retrieve it. Log the value to the console.
const stringValue = 'Hello World!';
localStorage.setItem('stringValue', stringValue);
console.log(localStorage.getItem('stringValue'));  // Output: 'Hello World!'

// Task 2: Save an object to local storage by converting it to a JSON string and retrieving it. Log the value to the console.
const objectVal = {
    name: 'Porsche',
    model: '911',
    year: 1991,
    price: '$1000000',
    color: 'blue'
};
const JSONString = JSON.stringify(objectVal);
localStorage.setItem('objectVal', JSONString);
console.log(localStorage.getItem('objectVal'));  // Output: '{"name":"Porsche","model":"911","year":1991,"price":"$1000000","color":"blue"}'

// Activity 3: Using Local Storage

// Task 3: Save user's input (name, email) to local storage when submitted. Retrieve and display the saved data on page load.
const form = document.querySelector('.task3');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    console.log(localStorage.getItem('name'));  // Output: Entered name
    console.log(localStorage.getItem('email')); // Output: Entered email
});

// Task 4: Remove an item from local storage. Log the localStorage content before and after the removal.
document.querySelector('.task4 > button').addEventListener('click', (e) => {
    e.preventDefault();
    removeItem('name');
});

function removeItem(key) {
    console.log(localStorage);  // Output: All localStorage items
    localStorage.removeItem(key);
    console.log(localStorage);  // Output: localStorage items after removal of 'key'
}

// Activity 4: Understanding Session Storage

// Task 5: Save a string value to session storage and retrieve it. Log the value to the console.
const stringforSession = "This is the session storage value";
sessionStorage.setItem('stringforSession', stringforSession);
console.log(sessionStorage.getItem('stringforSession'));  // Output: 'This is the session storage value'

// Task 6: Save an object to session storage by converting it to a JSON string and retrieve it. Log the value to the console.
const sessionObjectVal = {
    name: "Session Name",
    age: 20,
    author: "Udesh_Regmi",
    modifiedfor: '1 day'
};
sessionStorage.setItem("SessionObjval", JSON.stringify(sessionObjectVal));
console.log(sessionStorage.getItem("SessionObjval"));  // Output: JSON string of sessionObjectVal
console.log(JSON.parse(sessionStorage.getItem("SessionObjval")));  // Output: Parsed object from session storage

// Task 7: Save user's input (name, email) to session storage when submitted. Retrieve and display the saved data on page load.
const formData = document.querySelector(".sessionform");
formData.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameforSession = document.querySelector("#nameforSession").value;
    const emailforSession = document.querySelector("#emailforSession").value;
    sessionStorage.setItem("nameforSession", nameforSession);
    sessionStorage.setItem("emailforSession", emailforSession);
    console.log(sessionStorage.getItem("nameforSession"));  // Output: Entered name
    console.log(sessionStorage.getItem("emailforSession")); // Output: Entered email
});

// Display data from session storage on page load
window.addEventListener("load", () => {
    if (sessionStorage.getItem("nameforSession") && sessionStorage.getItem("emailforSession")) {
        document.querySelector(".datashowonload").innerHTML = `Name: ${sessionStorage.getItem("nameforSession")}<br>Email: ${sessionStorage.getItem("emailforSession")}`;
    }
});

// Task 8: Remove an item from session storage. Log the sessionStorage content before and after the removal.
document.querySelector('.sessionremovebtn > button').addEventListener('click', (e) => {
    e.preventDefault();
    removeSessionItem('nameforSession');
});

function removeSessionItem(key) {
    console.log(sessionStorage);  // Output: All sessionStorage items
    sessionStorage.removeItem(key);
    console.log(sessionStorage);  // Output: sessionStorage items after removal of 'key'
}

// Comparing localStorage and sessionStorage

// Task 9: Save to both local storage and session storage. Retrieve and log the value from both storages.
function saveToBoth(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log('From Local Storage: ' + localStorage.getItem(key));  // Output: value from localStorage
    console.log('From Session Storage: ' + sessionStorage.getItem(key));  // Output: value from sessionStorage
}
saveToBoth('nameforSession', 'Udesh_Regmi');

// Task 10: Clear all the data from both local storage and session storage and verify both storages are empty.
function clearStorages() {
    localStorage.clear();
    sessionStorage.clear();
    console.log(localStorage);  // Output: Empty localStorage
    console.log(sessionStorage);  // Output: Empty sessionStorage
}
clearStorages();
