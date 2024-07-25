# Activity 2: Named and Default exports
## Task 3: Create a module that exports multiple function using named exports. Import and use this module in another script.
In module file
```js
const multiple = (a, b) => {
    return a * b;
  };
  
  const division = (a, b) => {
    return a / b;
  };
  
  module.exports = {
    multiple,
    division,
 
  };
  ```
In main file
```js
const { multiple, division} = require('../Activity2/Task3.js')
console.log('Multiple is ', multiple(21,3455))
console.log('division is ', division(21,5))

```
 ## Task 4: Create a module that exports a single function using default exports. Import and use this module in another script.
 In module file
```js
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
export default isLeapYear;

  
```
In main file
```js
import isLeapYear from '../Activity2/Task4.mjs';
const year = 2024;
console.log(`${year} is a leap year: ${isLeapYear(year)}`);

```
