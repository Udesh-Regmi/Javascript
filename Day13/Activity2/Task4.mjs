// Activity 2: Named and Default exports
// Task 4: Create a module that exports a single function using default exports. Import and use this module in another script.

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
export default isLeapYear;
