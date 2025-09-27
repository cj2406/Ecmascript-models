/*
  so in JavaScript, a class is a blueprint for creating objects with
  shared properties and methods.
 */

class Person {
  // this is a constructor(runs setup code for a class).
  // it is Special method called when creating an object with new
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method basically this is a function inside an object/class
  greet() {
    console.log(`Hello, my name is ${this.name} and I’m ${this.age} years old.`);
  }

}

// Creating objects (instances of a class)
const person1 = new Person("mirabel", 25);
person1.greet();  // Hello, my name is mirabel and I’m 25 years old.



//In classes we have what we call Inheritance where a class gets a property or
//  method from its parent class it uses the EXTENDS keyword 

class People extends Person {
  constructor(name, age) {
    // the super keyword Call the parent (Person) constructor with name and age
    super(name, age);
  }

  //method
  shout() {
    console.log("Hey!!!");
  }
}

const person2 = new People("mary", 19);
//i acces  the methods below
person2.greet(); // Hello, my name is mary and I’m 19 years old.
person2.shout(); // Hey!!!



