// Regular Expressions

// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (eg. match all occurrence of the word "JavaScript" in a string). Log the matches to the console.
console.log('-------------- Task 1 --------------');
const regex = /JavaScript/g;

const Word= "JavaScript is a very popular programming language . It is single threaded and has first class functions. It is a functional programming language having a strong support of library files.";
console.log(Word.match(regex));


// Task 2: Write a regular expression to match all digits in a string. Log the matches to the console.
console.log('-------------- Task 2 --------------');
const regex2= /\d+/g; 
const values ='12234567890 is a string containing digits';
console.log(values.match(regex2));


// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words that start with a capital letter. Log the matches to the console.
console.log('-------------- Task 3 --------------');
const regex3= /[A-Z][a-z]+/g;
const Words= 'Javascript is a very popular programming language . It is single threaded and has first class functions. It is a functional programming language This ITEM Item having a strong support of library files.';
console.log(Words.match(regex3));

// Task 4: Write a regular expression to match all sequence of one or more digits in a string. Log the matches to the console.
console.log('-------------- Task 4 --------------');
const regex4= /\d+/g;
const values2 ='THis is a 12 number in 12111 is a string containing digits';
console.log(values2.match(regex4));


// Activity 3: Grouping and Capturing.

// Task 5: Write a regular expression to capture the area code , central office code and line number from a US phone number format. (eg. (123)-456-7890). Log the matches to the console.
console.log('-------------- Task 5 --------------');
const regex5= /\((\d{3})\)-(\d{3})-(\d{4})/;
const phoneNumberCheck= '(123)-456-7890';
console.log("Area Code", phoneNumberCheck.match(regex5)[1]);
console.log("Central Office Code", phoneNumberCheck.match(regex5)[2]);
console.log("Line Number", phoneNumberCheck.match(regex5)[3]);

// Task 6: Write a regular expression to capture a username and domain of an email address, log the captures. 

console.log('-------------- Task 6 --------------');
const regex6= /([a-zA-Z0-9]+)@([a-zA-Z0-9]+\.[a-zA-Z0-9]+)/;
const emailAddress= 'johndoe@gmail.com';
const username = emailAddress.match(regex6)[1];
const domain = emailAddress.match(regex6)[2];
console.log('username', username);
console.log('domain', domain);


// Activity 4: Assertions and Boundaries
// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches to the console.
console.log('-------------- Task 7 --------------');
const regex7= /^\w+/g;
const Words2= 'beginning of the word is at the beginning of the string';
console.log(Words2.match(regex7));


// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches to the console.
console.log('-------------- Task 8 --------------');
const regex8= /\w+$/g;
const Words3= 'end of the word is at the end of the string';
console.log(Words3.match(regex8));


// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password(must include at least one uppercaseletter, one lowercase letter, one number and one special character). Log the matches to the console.
console.log('-------------- Task 9 --------------');
const regex9= /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/g;
const passwords= 'Password@@123';
console.log(passwords.match(regex9));


// Task 10: Write a regular expression to validate a URL. Log the valid urls to the console.
console.log('-------------- Task 10 --------------');
const regex10= /((http|https):\/\/)?(www.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
const urls= 'http://www.google.com www.google.com facebook.com facebook';
console.log(urls.match(regex10));