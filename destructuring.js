
/*
    Destructuring in JavaScript is an easy way of unpacking values
    from arrays or extracting properties from objects into distinct 
    variables, using a short syntax.
*/ 
//I'll be destructuriing with objects as examples

let record=[{
    Name:"james",
    age:19,
    Grade:'A'
    
}]
let Name="cucurella"
let age=29;

record.push({Name,age})
//normally to access the values in an object within an array.one would;
/*
record.push({
    Name:Name ,
    age:age   
})
*/
console.log(`the name is ${record[1].Name} \n the age is ${record[1].age}`)

//arrow functions are also used in array methods
  console.log("the foreach method uses arrow functions too");
record.forEach(item=>{
    console.log(item.Name);
    console.log(item.age);

})

//some more array deatructuring
const numbers = [10, 20, 30];

// Old way
const a = numbers[0];
const b = numbers[1];

// With destructuring
const [x, y] = numbers;

console.log(x); // 10
console.log(y); // 20

//function destructuring
function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

//an object is passed in
greet({ name: "mirabel", age: 30 });

//destructuring can also be use on nested objects to allow them
//  to access the values of their ancestors

const user = {
  id: 1,
  profile: {
    role: "coder",
    address: { city: "LAGOS" }
  }
};

const {
  profile: {
    role,
    address: { city }
  }
} = user;

console.log(role); // "coder"
console.log(city);     // "LAGOS"
