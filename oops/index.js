// ✅ Defining a basic class
class Person {
  // 🔧 The constructor is called automatically when creating an object from the class
  constructor(name, age) {
    this.name = name; // 'this' refers to the current object instance
    this.age = age;
  }

  // ✅ Instance method - available to all objects of this class
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// 🚀 Creating an object (instance) from the Person class
const person1 = new Person("Amir", 28);
person1.greet(); // Output: Hi, I'm Amir and I'm 28 years old.

// 🧬 Inheritance - extending a base class
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // ✅ Call the parent (Person) constructor
    this.jobTitle = jobTitle;
  }

  // 🔄 Overriding method
  greet() {
    console.log(
      `Hi, I'm ${this.name}, a ${this.jobTitle}, and I'm ${this.age} years old.`
    );
  }
}

const emp1 = new Employee("Amir", 28, "Frontend Developer");
emp1.greet(); // Output: Hi, I'm Amir, a Frontend Developer, and I'm 28 years old.

// 🧰 Static method - belongs to the class, not instances
class Utils {
  static add(x, y) {
    return x + y;
  }
}

console.log(Utils.add(5, 3)); // Output: 8
// ❌ console.log(utils.add(5, 3)); // Error - cannot call static method on an instance

// 🔐 Private fields and methods (ES2022+)
class BankAccount {
  // Private property (cannot be accessed outside this class)
  #balance = 0;

  // Public method to deposit
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  // Public method to check balance
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // Output: 1000
// ❌ console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class

// 🏷️ Public class fields (no need to define inside constructor)
class Car {
  brand = "Toyota"; // public field
  wheels = 4;

  drive() {
    console.log(`Driving a ${this.brand} car with ${this.wheels} wheels.`);
  }
}

const car1 = new Car();
car1.drive(); // Output: Driving a Toyota car with 4 wheels.
