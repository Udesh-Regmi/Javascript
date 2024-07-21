# This is Day 9 of JavaScript. 
# Topic : JavaScript DOM Manipulation and Event Handling


## Activities

### Activity 1: Selecting and Manipulating Elements

- **Task 1**: Select an HTML element by its ID and change its text content using `innerText`, `innerHTML`, and `textContent`.
```javascript 
const leftDivisionContent = document.getElementById('leftdivision');
leftDivisionContent.innerText = 'This is after changing its contents.';
leftDivisionContent.innerHTML = '<span>This is change through innerHTML.</span>';
leftDivisionContent.textContent = 'Data added';
console.log(leftDivisionContent.childNodes);


```
- **Task 2**: Select elements by class and change their background color.
```javascript 
function changeBackgroundColor(className, color) {
  const elements = document.getElementsByClassName(className);
  for (const element of elements) {
    element.style.backgroundColor = color;
  }
}
changeBackgroundColor('topbar', 'red')
changeBackgroundColor('topbar', 'green')
changeBackgroundColor('container', 'blue')

```

### Activity 2: Creating and Appending Elements

- **Task 3**: Create a new `div` element with some content and add it to the body.
```javascript 
const body = document.querySelector('body')
const newdiv= document.createElement('div')

newdiv.innerText = `i am a new div which will be added to the body `

body.appendChild(newdiv)
```
- **Task 4**: Create a new `li` element and add it to an existing `ul` list.
```javascript
const ul = document.createElement('ul')
ul.innerHTML= `<li className ='InnerHTML'> This is made through InnerHTML </li>`
newdiv.appendChild(ul)
const li = document.createElement('li')
li.innerText= `Hello I am inside the li without INNERHTML. `
ul.appendChild(li)

```

### Activity 3: Removing Elements

- **Task 5**: Select an HTML element and remove it from the DOM. Also, remove the first and last child elements from a container and clear its styles.
```javascript 
//Here we are deleting the newdiv element which was previously added. 
newdiv.remove()
//Removing the first and last ELement Child from Container. and removing all container 
const container= document.querySelector('.container')
container.removeChild(container.firstElementChild)
container.removeChild(container.lastElementChild)
//Removing the styles. 
container.removeAttribute('style')
```
- **Task 6**: Remove the last child from an HTML element.
```javascript 
const rightBottom = document.querySelector('#rightbottom')
rightBottom.removeChild(rightBottom.lastChild)
```

### Activity 4: Modifying Attributes and Classes

- **Task 7**: Select an HTML element and change one of its attributes (e.g., the `src` of an `img` tag).
```javascript 
const anotherUrl = 'https://images.unsplash.com/photo-1720048171527-208cb3e93192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D'

const image= document.querySelector('img')
image.removeAttribute('src')
console.log(image.hasAttribute('src'))
image.src = anotherUrl
console.log(image.hasAttribute('src'))
console.log(image.parentElement.style.backgroundColor= 'aliceblue')
```
- **Task 8**: Add and remove CSS classes to and from an HTML element.
```javascript
const leftbottom = document.querySelector('#leftbottom')
leftbottom.style.border=`2px solid red`; 
leftbottom.style.transform = `rotate(90deg)`; 
leftbottom.style.overflow = `hidden`; 

```

### Activity 5: Event Handling

- **Task 9**: Add a click event to a button that changes its border color. Also, change the text content of a paragraph on button click.
```javascript 
const button = document.querySelector('.button > button')
button.addEventListener('click',(e)=>{
button.style.border= `5px solid yellow`
})
//Add a click event to a button that changes the text content of a paragraph when the button is clicked
const p= document.querySelector('p')
button.addEventListener('click', (e)=>{
  p.textContent=`Null content`; 
})
```
- **Task 10**: Add a mouseover event to an element that changes its border color.
```javascript 
const imagecont= document.querySelector('.imagecont')
imagecont.addEventListener('mouseover', (e)=>{
    console.log(e)
    e.target.style.border= `4px solid pink`

})
```
