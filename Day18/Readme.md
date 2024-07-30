## This is Day 18 of 30 days of Javascript
# Algorithms  in Javascript
# Sorting Algorithms

### Bubble Sort

**Description**: Sorts an array of numbers in ascending order using the bubble sort algorithm.

```javascript
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
```

**Usage**:
```javascript
const arr = [10, 23, 4, 5, 2, 22, 3];
console.log("Bubble Sorted Array", bubbleSort(arr));
```

### Selection Sort

**Description**: Sorts an array of numbers in ascending order using the selection sort algorithm.

```javascript
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
```

**Usage**:
```javascript
let numbers = [29, 10, 14, 37, 13];
console.log("Selection Sorted Array:", selectionSort(numbers));
```

### Quick Sort

**Description**: Sorts an array of numbers in ascending order using the quick sort algorithm.

```javascript
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    return [...left, pivot, ...right];
}
```

**Usage**:
```javascript
let numbers2 = [29, 10, 14, 37, 13];
console.log("Quick Sorted Array:", quickSort(numbers2));
```

## Searching Algorithms

### Linear Search

**Description**: Searches for a target value in an array using the linear search algorithm.

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return "The intended target is not present in the array";
}
```

**Usage**:
```javascript
console.log(linearSearch([1, 2, 3, 4, 5], 3));
```

### Binary Search

**Description**: Searches for a target value in a sorted array using the binary search algorithm.

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return "The intended target is not present in the array";
}
```

**Usage**:
```javascript
console.log(binarySearch([1, 2, 3, 4, 5], 3));
```

## String Algorithms

### Count Characters

**Description**: Counts the occurrences of each character in a string.

```javascript
function countCharacters(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        count[str[i]] = (count[str[i]] || 0) + 1;
    }
    return count;
}
```

**Usage**:
```javascript
console.log(countCharacters("WorldOFHELLINTHECOUNTRY"));
```

### Longest Substring Without Repeating Characters

**Description**: Finds the length of the longest substring without repeating characters.

```javascript
function longestSubstring(str) {
    let count = {};
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        count[str[i]] = (count[str[i]] || 0) + 1;
        if (count[str[i]] > max) {
            max = count[str[i]];
        }
    }
    return max;
}
```

**Usage**:
```javascript
console.log(longestSubstring("RARAJARA"));
```

## Array Algorithms

### Rotate Array

**Description**: Rotates an array `k` positions to the right.

```javascript
function rotateArray(arr, k) {
    let temp = [...arr];
    for (let i = 0; i < k; i++) {
        temp.push(temp.shift());
    }
    return temp;
}
```

**Usage**:
```javascript
console.log(rotateArray([1, 2, 3, 4, 5], 2));
```

### Merge Sorted Arrays

**Description**: Merges two sorted arrays into one sorted array.

```javascript
function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i++]);
        } else {
            mergedArray.push(arr2[j++]);
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr1[i++]);
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j++]);
    }
    return mergedArray;
}
```

**Usage**:
```javascript
console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
```

## Dynamic Programming

### Fibonacci Series

**Description**: Computes the Fibonacci series up to `n` using dynamic programming.

```javascript
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}
```

**Usage**:
```javascript
console.log(fibonacci(10));
```

### Knapsack Problem

**Description**: Solves the knapsack problem using dynamic programming.

```javascript
function knapsack(weights, values, capacity) {
    let dp = Array(weights.length + 1).fill().map(() => Array(capacity + 1).fill(0));
    for (let i = 1; i <= weights.length; i++) {
        for (let j = 0; j <= capacity; j++) {
            if (weights[i - 1] > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
            }
        }
    }
    return dp[weights.length][capacity];
}
```

**Usage**:
```javascript
console.log(knapsack([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], 5));
```

