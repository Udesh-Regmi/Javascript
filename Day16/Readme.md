## This is Day 16 of 30 days of Javascript
# Recursion in Javascript

## Activity 1: Basic Recursion

### Task 1: Factorial Calculation

A recursive function to calculate the factorial of a number.

```javascript
function factorial(num){
    if(num===0|| num===1){
        return 1;
    }
    return num*factorial(num-1);
}

console.log(`Factorial of 9 is ${factorial(9)}`)
console.log(`Factorial of 2 is ${factorial(2)}`)
console.log(`Factorial of 1 is ${factorial(1)}`)
```

### Task 2: Fibonacci Calculation

A recursive function to calculate the nth Fibonacci number.

```javascript
function fibonacci(num){
    if(num===0|| num===1){
        return 1;
    }
    return fibonacci(num-1)+fibonacci(num-2);
}

console.log(`Fibonacci of 10 is ${fibonacci(10)}`)
console.log(`Fibonacci of 5 is ${fibonacci(5)}`)
console.log(`Fibonacci of 1 is ${fibonacci(1)}`)
```

## Activity 2: Recursion with Arrays

### Task 3: Sum of Array Elements

A recursive function to find the sum of all elements in an array.

```javascript
function sumArr(arr){
    if(arr.length===1){
        return arr[0];
    }
    return arr[0]+ sumArr(arr.splice(1))
}

console.log(`Sum of array [1,2,3,4,5] is ${sumArr([1,2,3,4,5])}`)
```

### Task 4: Maximum Element in an Array

A recursive function to find the maximum element in an array.

```javascript
function maxElement(arr){
    if(arr.length===1){
        return arr[0];
    }
    const restMax = maxElement(arr.slice(1));
    return arr[0] > restMax ? arr[0] : restMax;
}

console.log(`Max element in array [1,2,3,4,5] is ${maxElement([1,2,3,4,5])}`)
```

## Activity 3: String Manipulation with Recursion

### Task 5: Reverse a String

A recursive function to reverse a string.

```javascript
function reverseString(string){
    if(string.length===1){
        return string;
    }
    return reverseString(string.slice(1))+string[0];
}

console.log(`Reverse of string "abcd" is ${reverseString("abcd")}`)
```

### Task 6: Palindrome Check

A recursive function to check if a string is a palindrome.

```javascript
function PalindromeCheck(str){
    if(str.length===1){
        return true;
    }
    let reverse = reverseString(str);
    return reverse === str ? `${str} is a palindrome` : `${str} is not a palindrome`;
}

console.log(`${PalindromeCheck("did")}`)
```

## Activity 4: Recursive Search

### Task 7: Binary Search

A recursive function to perform a binary search on a sorted array.

```javascript
function binarySearch(arr, target) {
    if (arr.length === 0) {
        return null; // Target not found
    }
    let mid = Math.floor(arr.length / 2);

    if (arr[mid] === target) {
        return arr[mid];
    } else if (arr[mid] > target) {
        return binarySearch(arr.slice(0, mid), target); // Search in left half
    } else {
        return binarySearch(arr.slice(mid + 1), target); // Search in right half
    }
}

console.log(`Binary search for target 5 in array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)}`)
```

### Task 8: Count Occurrences in Array

A recursive function to count the number of occurrences of a target element in an array.

```javascript
function countOccurences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    let count = (arr[0] === target) ? 1 : 0;
    return count + countOccurences(arr.slice(1), target);
}

console.log(`Count occurrences of target 5 in array is ${countOccurences([1, 2, 3, 4, 5, 5, 5], 5)}`)
```

## Activity 5: Recursive Tree Traversal

### Task 9: Inorder Traversal of a Binary Tree

A recursive function to perform an inorder traversal on a binary tree.

```javascript
function TreeNode(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function inorderTraversal(node) {
    if (node === null) {
        return;
    }
    inorderTraversal(node.left);
    console.log(node.value);
    inorderTraversal(node.right);
}

const sampleTree = new TreeNode(1, 
    new TreeNode(2, new TreeNode(4), new TreeNode(5)), 
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log("Inorder Traversal of the sample binary tree:");
inorderTraversal(sampleTree);
```

### Task 10: Calculate Depth of a Binary Tree
A recursive function to calculate the depth of a binary tree.

```javascript
function depthOfTree(node) {
    if (node === null) {
        return 0;
    }
    return 1 + Math.max(depthOfTree(node.left), depthOfTree(node.right));
}

console.log(`Depth of the sample binary tree is ${depthOfTree(sampleTree)}`)
```
