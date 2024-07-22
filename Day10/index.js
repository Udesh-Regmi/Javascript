// Activity 1: Basic Event Handling

//Task 1: Add a event handling to a button that changes the content of a paragraph. 
const button = document.querySelector('.btn1')
const firstpara= document.querySelector('.firstpara')
button.addEventListener('click', (e)=>{
    e.preventDefault();
    firstpara.textContent=`This is the changed content. `
    
})

//Task 2: Add a double click event to a image that toggles its visibility. 
const image = document.querySelector('.imagecontainer > img');
image.addEventListener('dblclick', (e) => {
    e.preventDefault();
    image.style.opacity = image.style.opacity ? '' : '0';
});

//Activity 2 : Mouse Events
//Task 3: Add a mouseover event to an element that changes its background color
const imagecontainer= document.querySelector('.imagecontainer')
imagecontainer.addEventListener('mouseover',(e)=>{
    e.preventDefault()
    imagecontainer.style.backgroundColor= `red`
})

//Task 4: Add a mouseout event to an element that resets its background color
imagecontainer.addEventListener('mouseleave',(e)=>{
    e.preventDefault()
    imagecontainer.style.backgroundColor= ``
})

//Activity 3: Keyboard Events. 
//Task 5: Add a keydown event listener to an input field that logs the keys pressed to console.
const inputData= document.querySelector('input')
inputData.addEventListener('keydown',(e)=>{
    if(e.key === ' '){
        console.log('Space')
    }
    console.log("Key pressed is ", e.key)
})

//Task 6 : Add a keyup event listener to an input field that displays the current values in a paragraph. 
const inppara= document.querySelector('#inppara')
const paragraph_input= document.querySelector('.paragraph_input')

inppara.addEventListener('keydown',(e)=>{
    const firstLetter = e.code[0]
    if(firstLetter === 'K'){
        paragraph_input.textContent += e.key
    } else {
        console.log('Special Character is used')
    }
})

//Activity 4: Form Events
//Task 7: Add a submit event listener to a form that prevents the default submission and log the form data value to the console
const Form= document.querySelector('.Form')
Form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Array.from(formData.entries())
    console.log(data)
})

//Task 8: Add a change event listener to select  dropdown that  displays the selected values in a paragraph
const dropdown=document.querySelector('#dropdown')
dropdown.addEventListener('change',(e)=>{
    e.preventDefault()
    const value = e.target.value;
    document.querySelector('.selpara').innerHTML= `<span> Selected Value is ${value} </span>`
})

//Activity 5: Event Delegation 
//Task 9: Add a click event listener to a list that logs the text contents of the clicked list items using event delegations. 
const listofli = document.querySelector('#listofli');
listofli.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() === 'li'){
        const selval = e.target.textContent;
        console.log(`Selected list item is ${selval}`);
    }
});

//Task 10: Add an event listener to a parent element that listens for events from a dynamically added child elements
// Get references to the parent element and the "Add Child" button
const parent = document.getElementById('parent');
const addButton = document.getElementById('addButton');

// Add an event listener to the parent element
parent.addEventListener('click', function(event) {
    // Check if the clicked element is a child element with class 'child'
    if (event.target && event.target.classList.contains('child')) {
        console.log('Child element clicked:', event.target);
    }
});

// Add an event listener to the "Add Child" button to dynamically add child elements
addButton.addEventListener('click', function() {
    const newChild = document.createElement('button'); // Create a new button element
    newChild.textContent = 'New Child';
    newChild.classList.add('child'); // Add a class to the new child element
    parent.appendChild(newChild); // Append the new child element to the parent
});
