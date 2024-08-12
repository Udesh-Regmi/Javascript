## This is Day 20 of 30 days of Javascript.
# Local and Session Storage in Javascript


## Activity 1: Understanding Local Storage
### Task 1: Save and Retrieve a String from Local Storage
- **Objective:** Save a string value to `localStorage` and retrieve it.
- **Code:**
  ```javascript
  const stringValue = 'Hello World!';
  localStorage.setItem('stringValue', stringValue);
  console.log(localStorage.getItem('stringValue'));
  ```

### Task 2: Save and Retrieve an Object from Local Storage
- **Objective:** Save an object to `localStorage` by converting it to a JSON string, then retrieve and log it.
- **Code:**
  ```javascript
  const objectVal = {
      name: 'Porsche',
      model: '911',
      year: 1991, 
      price: '$1000000',
      color: 'blue'
  };

  const JSONString = JSON.stringify(objectVal);
  localStorage.setItem('objectVal', JSONString);
  console.log(localStorage.getItem('objectVal'));
  ```

## Activity 3: Using Local Storage

### Task 3: Save Form Input to Local Storage
- **Objective:** Save user input (name, email) from a form to `localStorage` on submission.
- **Code:**
  ```javascript
  const form = document.querySelector('.task3');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      console.log(localStorage.getItem('name'));
      console.log(localStorage.getItem('email'));
  });
  ```

### Task 4: Remove an Item from Local Storage
- **Objective:** Remove a specific item from `localStorage` and log the storage content before and after removal.
- **Code:**
  ```javascript
  document.querySelector('.task4 > button').addEventListener('click', (e) => {
      e.preventDefault();
      removeItem('name');
  });

  function removeItem(key){
      console.log(localStorage);
      localStorage.removeItem(key);
      console.log(localStorage);
  }
  ```

## Activity 4: Understanding Session Storage

### Task 5: Save and Retrieve a String from Session Storage
- **Objective:** Save a string value to `sessionStorage` and retrieve it.
- **Code:**
  ```javascript
  const stringforSession = "This is the session storage value";
  sessionStorage.setItem('stringforSession', stringforSession);
  console.log(sessionStorage.getItem('stringforSession'));
  ```

### Task 6: Save and Retrieve an Object from Session Storage
- **Objective:** Save an object to `sessionStorage` by converting it to a JSON string, then retrieve and log it.
- **Code:**
  ```javascript
  const sessionObjectVal = {
      name: "Session Name", 
      age: 20,
      author: "Udesh_Regmi", 
      modifiedfor: '1 day'
  };
  sessionStorage.setItem("SessionObjval", JSON.stringify(sessionObjectVal));
  console.log(sessionStorage.getItem("SessionObjval"));
  console.log(JSON.parse(sessionStorage.getItem("SessionObjval")));
  ```

## Activity 5: Using Session Storage

### Task 7: Save Form Input to Session Storage
- **Objective:** Save user input (name, email) from a form to `sessionStorage` on submission and display the data on page load.
- **Code:**
  ```javascript
  const formData = document.querySelector(".sessionform");
  formData.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameforSession = document.querySelector("#nameforSession").value;
      const emailforSession = document.querySelector("#emailforSession").value;
      sessionStorage.setItem("nameforSession", nameforSession);
      sessionStorage.setItem("emailforSession", emailforSession);
      console.log(sessionStorage.getItem("nameforSession"));
      console.log(sessionStorage.getItem("emailforSession"));
  });

  window.addEventListener("load", () => {
      if(sessionStorage.getItem("nameforSession") && sessionStorage.getItem("emailforSession")){
          document.querySelector(".datashowonload").innerHTML = `Name: ${sessionStorage.getItem("nameforSession")}<br>Email: ${sessionStorage.getItem("emailforSession")}`;
      }
  });
  ```

### Task 8: Remove an Item from Session Storage
- **Objective:** Remove a specific item from `sessionStorage` and log the storage content before and after removal.
- **Code:**
  ```javascript
  document.querySelector('.sessionremovebtn > button').addEventListener('click', (e) => {
      e.preventDefault();
      removeItem('nameforSession');
  });

  function removeItem(key){
      console.log(sessionStorage);
      sessionStorage.removeItem(key);
      console.log(sessionStorage);    
  }
  ```

## Comparing localStorage and sessionStorage

### Task 9: Save Data to Both Storages
- **Objective:** Write a function that accepts a key and value, and saves them to both `localStorage` and `sessionStorage`. Retrieve and log the values.
- **Code:**
  ```javascript
  function saveToBoth(key, value){
      localStorage.setItem(key, value);
      sessionStorage.setItem(key, value);
      console.log('From Local Storage: ' + localStorage.getItem(key));
      console.log('From Session Storage: ' + sessionStorage.getItem(key));
  }

  saveToBoth('nameforSession', 'Udesh_Regmi');
  ```

### Task 10: Clear All Data from Both Storages
- **Objective:** Write a function that clears all data from both `localStorage` and `sessionStorage`, then verifies both storages are empty.
- **Code:**
  ```javascript
  function ClearStorages(){
      localStorage.clear();
      sessionStorage.clear();
      console.log(localStorage);
      console.log(sessionStorage);
  }

  ClearStorages();
  ```


