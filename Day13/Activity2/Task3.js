// Activity 2: Named and Default exports
// Task 3: Create a module that exports multiple function using named exports. Import and use this module in another script.

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
  