# This is Day 10 of JavaScript.

# Topic: JavaScript Event Handling 

## Activity 1: Basic Event Handling

### Task 1: Change Paragraph Content on Button Click

```javascript
const button = document.querySelector(".btn1");
const firstpara = document.querySelector(".firstpara");
button.addEventListener("click", (e) => {
  e.preventDefault();
  firstpara.textContent = "This is the changed content.";
});
```

### Task 2: Toggle Image Visibility on Double Click

```javascript
const image = document.querySelector(".imagecontainer > img");
image.addEventListener("dblclick", (e) => {
  e.preventDefault();
  image.style.opacity = image.style.opacity ? "" : "0";
});
```

## Activity 2: Mouse Events

### Task 3: Change Background Color on Mouse Over

```javascript
const imagecontainer = document.querySelector(".imagecontainer");
imagecontainer.addEventListener("mouseover", (e) => {
  e.preventDefault();
  imagecontainer.style.backgroundColor = "red";
});
```

### Task 4: Reset Background Color on Mouse Out

```javascript
imagecontainer.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  imagecontainer.style.backgroundColor = "";
});
```

## Activity 3: Keyboard Events

### Task 5: Log Keys Pressed to Console

```javascript
const inputData = document.querySelector("input");
inputData.addEventListener("keydown", (e) => {
  console.log("Key pressed is ", e.key === " " ? "Space" : e.key);
});
```

### Task 6: Display Input Values in Paragraph

```javascript
const inppara = document.querySelector("#inppara");
const paragraph_input = document.querySelector(".paragraph_input");

inppara.addEventListener("keyup", (e) => {
  if (e.key.length === 1 && e.key.match(/[a-z0-9]/i)) {
    paragraph_input.textContent += e.key;
  } else {
    console.log("Special character or non-printable key pressed");
  }
});
```

## Activity 4: Form Events

### Task 7: Prevent Form Submission and Log Data

```javascript
const Form = document.querySelector(".Form");
Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(Object.fromEntries(formData));
});
```

### Task 8: Display Selected Dropdown Value

```javascript
const dropdown = document.querySelector("#dropdown");
const selPara = document.querySelector(".selpara");
dropdown.addEventListener("change", (e) => {
  selPara.textContent = `Selected Value is ${e.target.value}`;
});
```

## Activity 5: Event Delegation

### Task 9: Log Clicked List Item Text

```javascript
const listofli = document.querySelector("#listofli");
listofli.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    console.log(`Selected list item is ${e.target.textContent}`);
  }
});
```

### Task 10: Handle Events from Dynamically Added Elements

```javascript
const parent = document.getElementById("parent");
const addButton = document.getElementById("addButton");

parent.addEventListener("click", (event) => {
  if (event.target.classList.contains("child")) {
    console.log("Child element clicked:", event.target.textContent);
  }
});

addButton.addEventListener("click", () => {
  const newChild = document.createElement("button");
  newChild.textContent = `Child ${parent.children.length + 1}`;
  newChild.classList.add("child");
  parent.appendChild(newChild);
});
```
