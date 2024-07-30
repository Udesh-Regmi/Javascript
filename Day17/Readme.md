
## This is  Day 17 of 30 days of Javascript
## Data Structures

### Activity 1: Linked List
#### Task 1: Implement a node class to represent an element in a linked list with properties values and next.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
console.log(new Node(1).value);
```
#### Task 2: Implement a linkedlist class with methods to add a node to the end, remove a node from the end, and print the entire linked list./node.
```js

class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Adds a node to the end of the linked list
    addNode(value) {
      let newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      }
    }
  
    // Removes the first node with the given value
    removeNode(value) {
      if (this.head === null) {
        return;
      }
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let currentNode = this.head;
      while (currentNode.next !== null) {
        if (currentNode.next.value === value) {
          currentNode.next = currentNode.next.next;
          return;
        }
        currentNode = currentNode.next;
      }
    }
  
    // Prints the entire linked list
    printList() {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
 ```
### Activity 2: Stack
#### Task 3: Implement a stack class with methods push (add element ), pop (remove element), peek (view the top element),
```js

class Stack{
    constructor(){
        this.stack=[]
    }
    addElement(e){
return this.stack.push(e);

    }
    popelement(){
        return this.stack.pop();
    }
    peekelement(){
        return this.stack[this.stack.length-1];
    }
 }

 let stack = new Stack()
 console.log("-----------------------Stack Operations---------------------")
 console.log(stack.addElement(1))
 console.log(stack.addElement(2))
 console.log(stack.addElement(3))
console.log('Popped Element is ', stack.popelement())
console.log('Popped Element is ', stack.popelement())
console.log('Popped Element is ', stack.popelement())
console.log(stack.addElement(4))
console.log(stack.peekelement())

```
#### Task 4: Use a stack class to reverse  a string by pushing all characters to the stack and popping them off in reverse order.
```js

class ReverseStack{
    constructor(){
        this.stack=[]

    }
    pushString(str){
        for(let i=0; i<str.length; i++){
            this.stack.push(str[i])
        }
        return this.stack;
    }
    popString(){
        let reversedString = "";
        while(this.stack.length > 0){
            reversedString += this.stack.pop();
        }
        return reversedString;
}

}
let reverseStack= new ReverseStack()
reverseStack.pushString("Hello")
console.log(reverseStack.popString())
```
### Activity 3: Queue
#### Task5: Implement a queue class with methods enqueue (add element ), dequeue (remove element), and front (view the front element of the queue).
```js
console.log("-----------------------Queue Operations---------------------")
class Queue {
  constructor() {
    this.queue = [];
  }

  // Adds an element to the end of the queue
  enqueue(element) {
    this.queue.push(element);
  }

  // Removes and returns the front element of the queue
  dequeue() {
    return this.queue.shift();
  }

  // Returns the front element without removing it
  front() {
    return this.queue[0];
  }
}

const queue = new Queue();
console.log("Enqueuing elements: 22, 33, 44");
queue.enqueue(22);
queue.enqueue(33);
queue.enqueue(44);
console.log("Dequeued Element:", queue.dequeue()); // Output: 22
console.log("Front Element:", queue.front()); // Output: 33
```
#### Task 6: Use the queue class to simulate similar printer queue where print jobs are added to the queue and processed in order. 
#### PrinterQueue class to simulate a printer queue
```js
class PrinterQueue {
    constructor() {
      this.queue = [];
      this.printer = null;
    }
  
    // Adds a print job to the queue
    enqueue(job) {
      this.queue.push(job);
    }
  
    // Processes and removes the first job from the queue
    dequeue() {
      if (this.queue.length === 0) return null;
      const job = this.queue.shift();
      if (this.printer && typeof this.printer.print === 'function') {
        this.printer.print(job);
      } else {
        console.log('No printer set or printer.print method is missing.');
      }
      return job;
    }
  
    // Sets the printer object that handles printing
    setPrinter(printer) {
      this.printer = printer;
    }
  }
  
  const printer = {
    print: (job) => console.log(`Printing: ${job}`)
  };
  
  const printerQueue = new PrinterQueue();
  printerQueue.setPrinter(printer);
  printerQueue.enqueue("Document 1");
  printerQueue.enqueue("Document 2");
  printerQueue.dequeue(); // Prints "Document 1"
  printerQueue.dequeue(); // Prints "Document 2"
  
  ```
### Activity 4: Binary Tree
#### Task 7: Implement  a tree node class to represent a node in a binary tree with properties value, right and left
```js


class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
```
#### Task 8: Implement a binary tree class with methods for inserting values and performing traversals to display NodeList. 
```js
console.log("-----------------------Binary Tree Operations---------------------")
// BinaryTree class to manage a binary tree structure
class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Inserts a value into the binary tree
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let currentNode = this.root;
      while (currentNode) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return;
          }
          currentNode = currentNode.right;
        } else {
          // Value already exists in the tree
          return;
        }
      }
    }
  
    // In-order traversal: left, root, right
    traverseInOrder(node) {
      if (node) {
        this.traverseInOrder(node.left);
        console.log(node.value);
        this.traverseInOrder(node.right);
      }
    }
  
    // Pre-order traversal: root, left, right
    traversePreOrder(node) {
      if (node) {
        console.log(node.value);
        this.traversePreOrder(node.left);
        this.traversePreOrder(node.right);
      }
    }
  
    // Post-order traversal: left, right, root
    traversePostOrder(node) {
      if (node) {
        this.traversePostOrder(node.left);
        this.traversePostOrder(node.right);
        console.log(node.value);
      }
    }
  }
  
  const binaryTree = new BinaryTree();
  binaryTree.insert(10);
  binaryTree.insert(5);
  binaryTree.insert(15);
  binaryTree.insert(2);
  binaryTree.insert(7);
  binaryTree.insert(12);
  binaryTree.insert(17);
  
  console.log("In-order Traversal:");
  binaryTree.traverseInOrder(binaryTree.root); // Output: 2, 5, 7, 10, 12, 15, 17
  
  console.log("Pre-order Traversal:");
  binaryTree.traversePreOrder(binaryTree.root); // Output: 10, 5, 2, 7, 15, 12, 17
  
  console.log("Post-order Traversal:");
  binaryTree.traversePostOrder(binaryTree.root); // Output: 2, 7, 5, 12, 17, 15, 10
  
```
### Activity 5: Graph
#### Task 9: Implemennt a graph method to add vertices and edges and perform a breadth -first search (BFS)
```js

console.log('Graph Operations')// Graph class to manage a graph structure
class Graph {
  constructor() {
    this.vertices = {};
  }

  // Adds a vertex to the graph
  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }

  // Adds an edge between two vertices
  addEdge(source, destination) {
    if (!this.vertices[source]) {
      this.addVertex(source);
    }
    if (!this.vertices[destination]) {
      this.addVertex(destination);
    }
    this.vertices[source].push(destination);
  }

  // Performs a breadth-first search from the start vertex
  bfs(startVertex) {
    let visited = new Set();
    let queue = [startVertex];

    while (queue.length > 0) {
      let currentVertex = queue.shift();
      if (!visited.has(currentVertex)) {
        console.log(currentVertex);
        visited.add(currentVertex);
        this.vertices[currentVertex].forEach((neighbor) => {
          if (!visited.has(neighbor)) {
            queue.push(neighbor);
          }
        });
      }
    }
  }
}

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);

console.log("BFS starting from vertex 1:");
graph.bfs(1); // Output: 1, 2, 3, 4

```
#### Task 10: Use the graph class to represent the simple network and perform BFS to find the shortest path between two nodes.
```js

class Network {
    constructor() {
      this.vertices = {};
    }
  
    // Adds a vertex to the network
    addVertex(vertex) {
      if (!this.vertices[vertex]) {
        this.vertices[vertex] = [];
      }
    }
  
    // Adds an edge between two vertices
    addEdge(source, destination) {
      if (!this.vertices[source]) {
        this.addVertex(source);
      }
      if (!this.vertices[destination]) {
        this.addVertex(destination);
      }
      this.vertices[source].push(destination);
    }
  
    // Finds the shortest path from start to end using BFS
    findShortestPath(start, end) {
      let visited = new Set();
      let queue = [[start]];
      while (queue.length > 0) {
        let path = queue.shift();
        let node = path[path.length - 1];
        if (!visited.has(node)) {
          let neighbors = this.vertices[node];
          for (let neighbor of neighbors) {
            let newPath = path.concat([neighbor]);
            queue.push(newPath);
            if (neighbor === end) {
              return newPath;
            }
          }
          visited.add(node);
        }
      }
      return null; // No path found
    }
  }
  
  const network = new Network();
  network.addVertex('A');
  network.addVertex('B');
  network.addVertex('C');
  network.addVertex('D');
  
  network.addEdge('A', 'B');
  network.addEdge('A', 'C');
  network.addEdge('B', 'D');
  network.addEdge('C', 'D');
  
  const shortestPath = network.findShortestPath('A', 'D');
  console.log("Shortest path from A to D:", shortestPath);
```