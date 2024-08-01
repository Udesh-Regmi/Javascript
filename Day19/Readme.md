## This is Day 19 of 30 days Javascript.
# Regular Expressions Exercises


### Activity 1: Basic Regular Expressions

#### Task 1: Match All Occurrences of the Word "JavaScript"
```javascript
console.log('-------------- Task 1 --------------');
const regex = /JavaScript/g;
const text = "JavaScript is a very popular programming language. It is single-threaded and has first-class functions. It is a functional programming language with strong support for library files.";
console.log(text.match(regex));
```


#### Task 2: Match All Digits in a String
```javascript
console.log('-------------- Task 2 --------------');
const regex2 = /\d+/g; 
const digits = '12234567890 is a string containing digits';
console.log(digits.match(regex2));
```


### Activity 2: Character Classes and Quantifiers

#### Task 3: Match All Words Starting with a Capital Letter
```javascript
console.log('-------------- Task 3 --------------');
const regex3 = /[A-Z][a-z]+/g;
const capitalizedWords = 'Javascript is a very popular programming language. It is single-threaded and has first-class functions. It is a functional programming language. This ITEM Item having a strong support of library files.';
console.log(capitalizedWords.match(regex3));
```


#### Task 4: Match All Sequences of One or More Digits
```javascript
console.log('-------------- Task 4 --------------');
const regex4 = /\d+/g;
const numbers = 'This is a 12 number in 12111 is a string containing digits';
console.log(numbers.match(regex4));
```


### Activity 3: Grouping and Capturing

#### Task 5: Capture US Phone Number Components
```javascript
console.log('-------------- Task 5 --------------');
const regex5 = /\((\d{3})\)-(\d{3})-(\d{4})/;
const phoneNumber = '(123)-456-7890';
console.log("Area Code", phoneNumber.match(regex5)[1]);
console.log("Central Office Code", phoneNumber.match(regex5)[2]);
console.log("Line Number", phoneNumber.match(regex5)[3]);
```


#### Task 6: Capture Username and Domain from an Email Address
```javascript
console.log('-------------- Task 6 --------------');
const regex6 = /([a-zA-Z0-9]+)@([a-zA-Z0-9]+\.[a-zA-Z0-9]+)/;
const emailAddress = 'johndoe@gmail.com';
const username = emailAddress.match(regex6)[1];
const domain = emailAddress.match(regex6)[2];
console.log('Username:', username);
console.log('Domain:', domain);
```

### Activity 4: Assertions and Boundaries

#### Task 7: Match a Word at the Beginning of a String
```javascript
console.log('-------------- Task 7 --------------');
const regex7 = /^\w+/g;
const startWord = 'beginning of the word is at the beginning of the string';
console.log(startWord.match(regex7));
```


#### Task 8: Match a Word at the End of a String
```javascript
console.log('-------------- Task 8 --------------');
const regex8 = /\w+$/g;
const endWord = 'end of the word is at the end of the string';
console.log(endWord.match(regex8));
```


### Activity 5: Practical Applications

#### Task 9: Validate a Simple Password
```javascript
console.log('-------------- Task 9 --------------');
const regex9 = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/g;
const password = 'Password@@123';
console.log(password.match(regex9));
```


#### Task 10: Validate a URL
```javascript
console.log('-------------- Task 10 --------------');
const regex10 = /((http|https):\/\/)?(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
const urls = 'http://www.google.com www.google.com facebook.com facebook';
console.log(urls.match(regex10));
```

