// Activity 1 : Class Definition

// Task1 : Define a class named 'Person' with the following properties : name, age, and method to return a greet message. Create an instance of the class and log the greet message.
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    updateAge(age) {
        this.age = age;
      }
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    } 
  
  }

  const person = new Person('John', 25);
  console.log(person.greet());


//   Task 2: Add a method to the person class that updates the age property and logs a message to the console.
const person2 = new Person('Derre souris', 30);
person2.updateAge(35);
console.log(person2.greet());
person2.updateAge(35);
console.log(person2.age);


// Activity 2: Class Inheritance
// Task 3: Define a class named 'Student' that extends the Person class. Add a property studentId  and a method  to return the studentId. Create an instance of the Student class and log the studentId.
class Student1 extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentId() {
    return this.studentId;
  }
}

const student = new Student1('John', 25, '123456789');
console.log(student);
console.log(student.getStudentId());


//Task 4:  Overwrite the greet method in the Student class to include the studentId in the greet message.Log the overwritten greet message.
class Student2 extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }
  getStudentId() {
    return this.studentId;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. My student id is ${this.studentId}.`;
  }
}
const student2 = new Student2('John', 25, '332331');
console.log(student2.greet());


// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class and return a generic greet message. Call this static method without creating an instance of the Person class.
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

//   Task 6: Add a static property to the Student class  to keep track of the number of students. Increment this property  in the constructor and log the value of this property.
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
  const students2 = new Student('Jane', 22, '987654321');
  console.log(students2.greet());
  const student3 = new Student('Alice', 23, '456789123');
  console.log(student3.greet());


//   Activity 4 Getters and Setters
//   Task 7: Add a getter to the Person class to return the full name (assume a firstname and a lastname). Create an instance of the Person class and log the full name.
class PersonWithGetter {
    constructor(name,lastname,  age) {
      this.name = name;
      this.lastname = lastname;
      this.age = age;
    }
  
    // Getter to return the full name
    get fullName() {
      return `${this.name} ${ this.lastname} ${this.age}`;
    }   
}
console.log(new PersonWithGetter('John','Cena', 25).fullName);

// Task 8: Add a setter to the Person class to update the name property.(firstName and lastName )Update a name using the setter and log the updated name.
class PersonWithSetter {
    constructor(name,lastname,  age) {
      this.name = name;
      this.age = age;
      this.lastname = lastname;
    }
  
    // Setter to update the name property
    set name(newName) {

      this._name = newName;

    }
    
    // Getter to return the full name
    get fullName() {
      return `${this.name} ${this.lastname} ${this.age}`;
    }
}
console.log(new PersonWithSetter('John','Cena', 25).name = 'Karlos');
console.log(new PersonWithSetter('John','Cena', 25).fullName);

