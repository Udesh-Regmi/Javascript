// Recursion

// Activity 1: Basic Recursion
// Task 1: Write a recursive function that calculates the factorial of a number. Log few test cases.
console.log(`---------------------------- Task 1 ----------------------------`)
function factorial(num){
    if(num===0|| num===1){
        return 1;
    }
    return num*factorial(num-1);
}
console.log(`Factorial of 23 is ${factorial(9)}`)
console.log(`Factorial of 2 is ${factorial(2)}`)
console.log(`Factorial of 1 is ${factorial(1)}`)

//Task 2: Write a recursive function to calculate the nth  fibonacci number. Log few test cases.
console.log(`---------------------------- Task 2 ----------------------------`)

function fibonacci(num){
    let arr=[]
    if(num===0|| num===1){
        return 1;
    }
    return fibonacci(num-1)+fibonacci(num-2);

}

console.log(`Fibonacci of 10 is ${fibonacci(10)}`)
console.log(`Fibonacci of 5 is ${fibonacci(5)}`)
console.log(`Fibonacci of 1 is ${fibonacci(1)}`)


//Activity 3: Recursion with Arrays
// Task3: Write a recursive function to  find the sum of all elements in an array. Log few test cases.
console.log(`---------------------------- Task 3 ----------------------------`)

function sumArr(arr){
    if(arr.length===1){
        return arr[0];
    }
    return arr[0]+ sumArr(arr.splice(1))
}
console.log(`Sum of array [1,2,3,4,5] is ${sumArr([1,2,3,4,5])}`)
console.log(`Sum of array [1,2,3,4] is ${sumArr([1,2,3,4])}`)
console.log(`Sum of array [1,2,3] is ${sumArr([1,2,3])}`)
console.log(`Sum of array [1,2] is ${sumArr([1,2])}`)
console.log(`Sum of array [1] is ${sumArr([1])}`)


//Task 4: Write a recursive functio to find the maximum element in an array. Log the result witha few test cases.
console.log(`---------------------------- Task 4 ----------------------------`)

function maxElement(arr){
    if(arr.length===1){
        return arr[0];
    }
    const restMax = maxElement(arr.slice(1));

    return arr[0] > restMax ? arr[0] : restMax;
}
console.log(`Max element in array [1,2,3,4,5] is ${maxElement([1,2,3,4,5])}`)
console.log(`Max element in array [1,2,3,4] is ${maxElement([1,2,3,4])}`)
console.log(`Max element in array [1,2,3] is ${maxElement([1,2,3])}`)
console.log(`Max element in array [1,2] is ${maxElement([1,2])}`)
console.log(`Max element in array [1] is ${maxElement([1])}`)


// Activity 3: String Manpulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log few test cases.
console.log(`---------------------------- Task 5 ----------------------------`)

function reverseString(string){
    if(string.length===1){
        return string;
    }
    return reverseString(string.slice(1))+string[0];
}
console.log(`Reverse of string "abcd" is ${reverseString("abcd")}`)

// Task 6: Write a recursive function to find if  a string is palindrome or not. Log few test cases.
console.log(`---------------------------- Task 6 ----------------------------`)

function PalindromeCheck(str){
    if(str.length===1){
        return true;
    }
    let reverse=reverseString(str);
    if(reverse === str){
        return `${str} is a palindrome`;
    }
    return  ` ${str} is not a palindrome`;
}
console.log(`${PalindromeCheck("df")}`)
console.log(`${PalindromeCheck("wuidd")}`)
console.log(`${PalindromeCheck("did")}`)
console.log(`${PalindromeCheck("RarararaR")}`)

// Activity 4: Recursive Search
//Task 7 : Write a recursive function to performa a binary search on a sorted array. Log few test cases.
console.log(`---------------------------- Task 7 ----------------------------`)
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
        return binarySearch(arr.slice(mid + 1, arr.length), target); // Search in right half
    }
}
console.log(`Binary search for target 5 in array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)}`)
console.log(`Binary search for target 10 in array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)}`)
console.log(`Binary search for target 1 in array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)}`)
console.log(`Binary search for target 15 in array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)}`)
console.log(`Binary search for target 20 in array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] is ${binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20)}`)


//Task 8: Write a recursive function to count the number of occurences of a target element in an array. Log few test cases.
console.log(`---------------------------- Task 8 ----------------------------`)
function countOccurences(arr, target) {
    if (arr.length === 0) {
        return 0 
    }
    let count = (arr[0] === target) ? 1 : 0;
    return count + countOccurences(arr.slice(1), target);   
}
console.log(`Count occurences of target  in array  is ${countOccurences([1, 2, 3, 4, 5,5, 5, 5,55,5 , 6, 7, 8, 9, 10], 5)}`)
console.log(`Count occurences of target  in array  is ${countOccurences([1, 2, 3, 4, 5,5, 5, 5,55,5 , 6, 7, 8, 912,1212, 21, 12, 10], 21)}`)
console.log(`Count occurences of target  in array  is ${countOccurences([1, 2, 3, 4, 5,5, 5, 5,55,5 , 6, 7, 8, 9, 10], 129)}`)
console.log(`Count occurences of target  in array  is ${countOccurences([1, 2, 3, 4, 5,5, 5, 5,55,5 , 6, 7, 8, 9, 10], 2)}`)
console.log(`Count occurences of target  in array  is ${countOccurences([1, 2, 3, 4, 5,5, 5, 5,55,5 , 6, 7, 8, 9, 10,11,1,1,1,1,11,1,1,11], 11)}`)


// Activity 5: Recursive Tree Traversal
// Task 9: Write a recursive function to perform an inorder travrsal on a binary Tree. Log the nodes as they are visited.
console.log(`---------------------------- Task 9 ----------------------------`)

function TreeNode(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function inorderTraversal(node) {
    // Base case: If the node is null, return.
    if (node === null) {
        return;
    }

    // Traverse the left subtree.
    inorderTraversal(node.left);

    // Visit the root node.
    console.log(node.value);

    // Traverse the right subtree.
    inorderTraversal(node.right);
}

// Helper function to create a sample binary tree.
function createSampleTree() {
    // Constructing the following binary tree
    //        1
    //       / \
    //      2   3
    //     / \ / \
    //    4  5 6  7
    const node4 = new TreeNode(4);
    const node5 = new TreeNode(5);
    const node6 = new TreeNode(6);
    const node7 = new TreeNode(7);
    const node2 = new TreeNode(2,  node5);
    const node3 = new TreeNode(3, node6, node7);
    const root = new TreeNode(1, node2, node3, node4);
    return root;
}

// Create a sample binary tree and perform inorder traversal.
const sampleTree = createSampleTree();
console.log("Inorder Traversal of the sample binary tree:");
inorderTraversal(sampleTree);


//Task 10: Write a recursive function to calculate the depth of a binary tree. Log few test cases.
console.log(`---------------------------- Task 10 ----------------------------`)

function depthOfTree(node) {
    if (node === null) {
        return 0;
    }
    return 1 + Math.max(depthOfTree(node.left), depthOfTree(node.right));
}
console.log(`Depth of the sample binary tree is ${depthOfTree(sampleTree)}`)
console.log(`Depth of the sample binary tree is ${depthOfTree(sampleTree)}`)
console.log(`Depth of the sample binary tree is ${depthOfTree(sampleTree)}`)
console.log(`Depth of the sample binary tree is ${depthOfTree(sampleTree)}`)