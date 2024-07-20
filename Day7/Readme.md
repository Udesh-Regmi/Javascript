This is Day 7 of 30 days of Javascript 

Topic : Objects in JavaScript
Activity 1: Object Creation and Access 
```javascript
// Task 1: Create an object representing a book with  properties like title, author, and year and log the result to console.
const bookInfo = {
    "title": "Atomic Habits",
    "author": 'James Clear',
    "published year": 1997
}
console.log('BookInfo Data is ', bookInfo);
```
```javascript
//Task 2: Access and log the title and author property of the book object. 
console.log('Author is ', bookInfo.author)
console.log('Author is ', bookInfo['author'])
console.log('Book Title is ', bookInfo.title);
console.log('Book Title is ', bookInfo["title"]);
```
Activity 2 : Object Methods. 
```javascript
//Task 3: Add a method to the book objects that returns a string with book's title and author, and log the result of calling this method. 
bookInfo.getInformation = function () {
    return `The title is ${this.title} and author is ${this.author}`
}
console.log('Info', bookInfo.getInformation());
```
```javascript
//Task 4: Add a method to the book object that takes year as a parameter and updates the book's year property . and log the output. 
const Book = {
    'author': 'John Doe', 
    'title:': 'Web Simplified', 
    'year': 1999
}
console.log(Book)
Book.updateYear= function (year){
    return this.year= year; 
}
console.log('Book after year updation is ', Book.updateYear(2000))
console.log('book is ', Book)
```
Activity 3: Nested Objects. 
```javascript
// Task5: Create a nested object representing a library with properties like name and books (an array of book object ) and log the library objet to the console.
const library ={
    name: 'Own Library ', 
    books : [
        {
            'title' :'Autobiography', 
            'year' :2001,
            'genre':'Fictional'
        },
        {
            'title' :'Nothing', 
            'year' :2011,
            'genre':'Crime-Thriller'
        }
    ]
}
console.log('library is ', library)
```
```javascript
//Task 6: Access and log all name of the library and title of all books in library. 
console.log('Name in library is ', library.name)

const titles = library.books.map((e)=> e.title)
console.log('Titles are ', titles)

library.books.forEach((e)=>{
    console.log(e.title)
})
```
 Activity 4: The this keyword.
 ```javascript 
//Task 7: Add a method to a book that uses this keyword to return a string with book's title  and year and log the result of calling this method. 
library.books.getTitleAndYear = function() {
  const titles = this.map(book => book.title);
  const years = this.map(book => book.year);

  return `The titles are ${titles.join(', ')} and the years are ${years.join(', ')} respectively..`;
}
console.log(library.books.getTitleAndYear())
console.log(library.books)
```
 Activity 5: Object Iteration 
```javascript
// Task 8: Use a for..in loop to iterate over a property of the book object and log each property and its  value.
const BookObj = {
    id: Math.random()*10, 
    title: 'Nomore Title', 
    author : 'Destiny ',      
    resleasedon: 2001, 
    description :[
        {
            genre :'Real Life Story', 
            about: 'How a life is Created and destroyed'
        }, 
        {
            impactson :'Mostly Teenagers', 
            vision : 'Global sales'
        }
    ], 
    thankfulto: 'Me Myself', 
    isPublished : true, 
    isinnepaliVersion : false, 
}
console.log(BookObj)
for (const key in BookObj) {
        console.log(BookObj[key])   
}
```
```javascript
//Task9 : Use Object.keys and Object.values method to log all the keys and values to the console.
function UseObjtoPrint(obj){
    const keys = Object.keys(obj)
    const values = Object.values(obj)
    for(let i=0; i<keys.length; i++){
    
        console.log(`Keys is ${keys[i]} and values is ${values[i]}`)
    }
}
UseObjtoPrint(BookObj)
```