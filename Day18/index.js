// Algorithms

// Activity 1: Sorting Algorithm

//Task 1: Implement bubble sort algorithm to sort an array of numbers in ascendin order . Log the sorted array to the console.
console.log("-----------------------Bubble Sort Operations---------------------")
function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
       for (let j=0; j<arr.length-i-1; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }   
}
return arr;
}
const arr=[10,23,4,5,2,22,3,]
console.log("Bubble Sorted Array",bubbleSort(arr));

// Task 2: Implement a selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array to the console.
console.log("-----------------------Selection Sort Operations---------------------")
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min != i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let numbers = [29, 10, 14, 37, 13];
console.log("Original array:", numbers);
let sortedArray = selectionSort(numbers);
console.log(" Selection Sorted array:", sortedArray);

// Task 3: Implement the quickest sort algorithm to sort an array of numbers in ascending order. Log the sorted array to the console.
console.log("-----------------------Quick Sort Operations---------------------")
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

let numbers2 = [29, 10, 14, 37, 13];
console.log("Original array:", numbers2);
let sortedArray2 = quickSort(numbers2);
console.log("Quick Sorted array:", sortedArray2);

// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to search for a target value in an array. Log the index of the target value.
console.log("-----------------------Linear Search Operations---------------------")
function linearSearch(arr, target){
    for (let i=0; i<arr.length; i++){
        if(arr[i]===target){
            return i;
        }

    }
    return `The intended target is not present in the array`;

}
console.log(linearSearch([1,2,3,4,5],3));
console.log(linearSearch([1,232,3,4,5],1));
console.log(linearSearch([1,22,33,42,5],3));


// Task 5: Implement the binary search algorithm to find the target in a sorted array. Log the index of the target value.
console.log("-----------------------Binary Search Operations---------------------")
function binarySearch(arr, target){
    let left=0; 
    let right=arr.length-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===target){
            return mid;
        }
        else if(arr[mid]>target){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
return `The intended target is not present in the array`;
}
console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([1111,232,0,4,5],1));
console.log(binarySearch([1,22,33,42,5],3));

// Activity 3: String Algorithm
// Task 6: write a function to count the occurrences of  each character in a String. Log the count of each character. 
console.log("-----------------------String Operations---------------------")

function countCharacters(str){
    let count={};
    for(let i=0; i<str.length; i++){
        if(count[str[i]]){
            count[str[i]]++;
        }
        else{
            count[str[i]]=1;
        }
    }
    return count;
}
console.log(countCharacters("WorldOFHELLINTHECOUNTRY"));

// Task 7: Write a function to find the longest substring without repeating characters in string . Log the length of the longest substring. 
console.log("-----------------------String Operations---------------------")

function longestSubstring(str){
    let count={};
    let max=0;
    for(let i=0; i<str.length; i++){
        if(count[str[i]]){
            count[str[i]]++;
        }
        else{
            count[str[i]]=1;
        }
        if(count[str[i]]>max){
            max=count[str[i]];
        }
    }
    return max;
}
console.log(longestSubstring("RARAJARA"));


// Activity 4 : Array Algorithm
// Task 8: Write a function to rotate an array k position . log the rotated array.
console.log("-----------------------Array Operations---------------------")
function rotateArray(arr,k){
    let temp=[];
    for(let i=0; i<arr.length; i++){
        temp.push(arr[i]);
    }
    for(let i=0; i<k; i++){
        temp.push(temp.shift());
    }
    return temp;
}
console.log(rotateArray([1,2,3,4,5],2));

// Task 9: Write a function to merge two sorted arrays. Log the merged array.
console.log("-----------------------Array Operations---------------------")
function mergeArrays(arr1,arr2){
    let mergedArray=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergedArray.push(arr1[i]);
            i++;
        }
        else{
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
console.log(mergeArrays([1,2,3,4,5],[6,7,8,9,10]));


// Activity 5: Dynamic Programming
// Task 10: Write a function to solve fibonacci series using dynamic programming. Log the fibonacci series.
console.log("-----------------------Dynamic Programming Operations---------------------")
function fibonacci(n){
    let fib=[0,1];
    for(let i=2; i<=n; i++){
        fib.push(fib[i-1]+fib[i-2]);
    }
    return fib;
}
console.log(fibonacci(10));

//Task 11 : Write a function to solve ksnapsack problem using dynamic programming. Log the maximum value of the knapsack.
console.log("-----------------------Dynamic Programming Operations---------------------")
function knapsack(weights,values,capacity){
    let dp=[];
    for(let i=0; i<=weights.length; i++){
        dp.push([]);
    }
    for(let i=0; i<=weights.length; i++){
        for(let j=0; j<=capacity; j++){
            if(i===0){
                dp[i][j]=0;
            }
            else if(j===0){
                dp[i][j]=values[i-1];
            }
            else if(weights[i-1]>j){
                dp[i][j]=dp[i-1][j];
            }
            else{
                dp[i][j]=Math.max(dp[i-1][j],dp[i-1][j-weights[i-1]]+values[i-1]);
            }
        }
    }
    return dp[weights.length][capacity];
}
console.log(knapsack([1,2,3,4,5],[1,2,3,4,5],5));
