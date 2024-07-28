## This is Day 14 of Javascript.

### Activity 1: Class Definition

#### Task 1: Define a class named 'Person' with properties `name` and `age`, and a method to return a greet message.
```javascript
// Define the Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to update the age property
  updateAge(age) {
    this.age = age;
  }

  // Method to return a greet message
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create an instance of the Person class
const person = new Person('John', 25);
console.log(person.greet());
```

#### Task 2: Add a method to the Person class to update the age property and log a message to the console.
```javascript
const person2 = new Person('Derre souris', 30);
person2.updateAge(35);
console.log(person2.greet());
console.log(person2.age);
```

### Activity 2: Class Inheritance
#### Task 3: Define a class named 'Student' that extends the Person class. Add a property `studentId` and a method to return the `studentId`.

```javascript
// Define the Student class extending the Person class
class Student1 extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  // Method to return the studentId
  getStudentId() {
    return this.studentId;
  }
}

// Create an instance of the Student class
const student = new Student1('John', 25, '123456789');
console.log(student.getStudentId());
```

#### Task 4: Overwrite the `greet` method in the Student class to include the `studentId` in the greet message.

```javascript
// Define the Student class extending the Person class with an overridden greet method
class Student2 extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }

  // Overridden greet method to include studentId
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. My student id is ${this.studentId}.`;
  }
}

// Create an instance of the Student class
const student2 = new Student2('John', 25, '332331');
console.log(student2.greet());
```

### Activity 3: Static Methods and Properties
#### Task 5: Add a static method to the Person class to return a generic greet message.

```javascript
// Define the PersonWithStatic class
class PersonWithStatic {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Instance method to return a greet message
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Static method to return a generic greet message
  static staticGreet() {
    return 'Hello, my name is Shyam and I am 5 years old.';
  }
}

// Calling the static method without creating an instance of the PersonWithStatic class
console.log(PersonWithStatic.staticGreet());
```

#### Task 6: Add a static property to the Student class to keep track of the number of students. Increment this property in the constructor and log the value of this property.

```javascript
// Define the Student class extending the Person class with a static property
class Student extends Person {
  // Static property to keep track of the number of students
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    // Increment the studentCount static property whenever a new instance is created
    Student.studentCount++;
    // Log the value of the studentCount
    console.log(`Student count: ${Student.studentCount}`);
  }

  // Method to return the studentId
  getStudentId() {
    return this.studentId;
  }

  // Overwriting the greet method to include studentId in the message
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. My student id is ${this.studentId}.`;
  }
}

// Creating instances of the Student class
const student1 = new Student('John', 25, '123456789');
console.log(student1.greet());
const student2 = new Student('Jane', 22, '987654321');
console.log(student2.greet());
const student3 = new Student('Alice', 23, '456789123');
console.log(student3.greet());
```

### Activity 4: Getters and Setters

#### Task 7: Add a getter to the Person class to return the full name (assume a first name and a last name).

```javascript
// Define the PersonWithGetter class
class PersonWithGetter {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  // Getter to return the full name
  get fullName() {
    return `${this.name} ${this.lastname}`;
  }
}

// Create an instance of the PersonWithGetter class
const personWithGetter = new PersonWithGetter('John', 'Cena', 25);
console.log(personWithGetter.fullName);
```

#### Task 8: Add a setter to the Person class to update the name property (first name and last name). Update a name using the setter and log the updated name.

```javascript
// Define the PersonWithSetter class
class PersonWithSetter {
  constructor(name, lastname, age) {
    this._name = name;
    this._lastname = lastname;
    this.age = age;
  }

  // Setter to update the name property
  set name(newName) {
    this._name = newName;
  }

  // Getter to return the full name
  get fullName() {
    return `${this._name} ${this._lastname}`;
  }
}

// Create an instance of the PersonWithSetter class and update the name using the setter
const personWithSetter = new PersonWithSetter('John', 'Cena', 25);
personWithSetter.name = 'Karlos';
console.log(personWithSetter.fullName);
```

### Activity 5: Private Fields (optional)

#### Task 9: Define a class named 'Account' with private fields `balance` and a method to deposit and withdraw money.
```javascript
class Account {
  // Private field for balance
  #balance;

  constructor(initialBalance) {
      this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
      if (amount > 0) {
          this.#balance += amount;
          console.log(`Deposited: ${amount}`);
      } else {
          console.log('Deposit amount must be positive');
      }
  }

  // Method to withdraw money
  withdraw(amount) {
      if (amount > 0) {
          if (amount <= this.#balance) {
              this.#balance -= amount;
              console.log(`Withdrawn: ${amount}`);
          } else {
              console.log(`Insufficient balance to withdraw ${amount}`);
          }
      } else {
          console.log('Withdrawal amount must be positive');
      }
  }

  // Getter to retrieve the current balance
  getBalance() {
      return this.#balance;
  }
}
```
#### Task 10 : Create an instance of the account and test the deposit and withdrawal methods, logging the balance after each transaction. 
```javascript
const account = new Account(1000);
console.log(`Initial Balance: ${account.getBalance()}`);
account.deposit(500);
console.log(`Balance after deposit: ${account.getBalance()}`);
account.withdraw(2000);
console.log(`Balance after withdrawal: ${account.getBalance()}`);
account.withdraw(300);
console.log(`Balance after another withdrawal: ${account.getBalance()}`);
```

