// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to console.
const arr = [1, 2, 3, 4, 5];
console.log("Array of numbers from 1 to 5:", arr);

// Task 2: Access the first and last element from the array
console.log("First element of the array:", arr[0]);
console.log("Last element of the array:", arr[arr.length - 1]);

// Activity 2: Array Methods
// Task 3: Use the push method to add a number to the end of an array and log the updated data to the console.
const newArr = [1, 2, 4, 8, 90];
console.log("Original array:", newArr);
newArr.push(911);
console.log("Array after push:", newArr);

// Task 4: Use the pop method to remove the last element of an array and log the updated data to the console.
const dataArr = ['name', 'address', 'location', 'phoneno', 'cityoforigin'];
console.log("Original array:", dataArr);
dataArr.pop();
console.log("Array after pop:", dataArr);

// Task 5: Use the shift method to remove the first element of an array and log the updated data to the console.
const loginInfo = ['username', 'phoneno', 'password'];
console.log("Original array:", loginInfo);
loginInfo.shift();
console.log("Array after shift:", loginInfo);

// Task 6: Use the unshift method to add a new element at the beginning of the array and log the updated array.
const registerInfo = ['DOB', 'Name', 'Email', 'Password', 'Agreed'];
console.log("Original array:", registerInfo);
registerInfo.unshift('phone no');
console.log("Array after unshift:", registerInfo);

// Activity 3: Array Methods (intermediate)
// Task 7: Use the map method to create a new array where each number is squared and log the new array to the console.
const numArray = [1, 2, 4, 5, 6, 7, 8];
const newNumArray = numArray.map((e) => e ** 2);
console.log("Original array:", numArray);
console.log("New array with squared values:", newNumArray);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
const rawArray = [1, 2, 31, 99, 89, 79, 53, 22, 44, 12, 89];
const evenArr = rawArray.filter((e) => e % 2 === 0);
console.log("Even numbers array:", evenArr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result to the console.
const unreducedArray = [1, 12, 400, 232, 231, 11, 1323, 2323];
const sum = unreducedArray.reduce((acc, num) => acc + num, 0);
console.log("Sum of all numbers in the array:", sum);

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over each element in the array and log the result to the output.
const arrLoop = [1, 2, 3, 'Porsche', 'feature', 'Convertible', 'Slim', 'Speed', 911];
console.log("Iterating using for loop:");
for (let i = 0; i < arrLoop.length; i++) {
    console.log(arrLoop[i]);
}

// Task 11: Use forEach method to iterate over the array and log the result to the output.
const loopEachArr = ['This ', 'is ', 'features', { name: 'Porsche', model: '911 GT3RS', price: 'Aukat k bahar' }];
console.log("Iterating using forEach:");
loopEachArr.forEach((e) => {
    console.log(e);
});

// Activity 5: Multidimensional Array
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const createTwoDimensionalArray = (rows, cols, initialValue = 1212) => {
    const arr = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(initialValue);
        }
        arr.push(row);
    }
    return arr;
};
const resultTwoDimensionalArray = createTwoDimensionalArray(5, 5);
console.log("Two-dimensional array (matrix):", resultTwoDimensionalArray);

// Task 13: Access and log a specific element from the two-dimensional array.
const arrayOf2D = [
    ['This is GT-3 RS', 1999, true, 'stylish'],
    ['This is GT-4 RS', 2999, false, 'Sporty'],
    ['This is GT-5 RS', 3999, true, 'Needed in Nepal'],
    ['This is GT-6 RS', 4999, true, 'Autobahn Speed Test'],
    ['This is GT-7 RS', 5999, false]
];
console.log("Specific elements from the two-dimensional array:");
console.log("Element at [0][3]:", arrayOf2D[0][3]);
console.log("Element at [1][2]:", arrayOf2D[1][2]);
console.log("Element at [2][1]:", arrayOf2D[2][1]);
console.log("Element at [3][0]:", arrayOf2D[3][0]);
