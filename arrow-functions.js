//Arrow Functions are a shorter method for regular functions
// they can be stored in variales and require less syntax but
// do not allow HOISTING unlike rehgular functions.

//a basic arrow function ,saved within a variable
let displayGrades= ()=>{
    let grades=['A'];
    console.log(`the grade is ${grades}`)
}
displayGrades();

//arrow functions are also udsed in array methods

let nums=[11,18,19];
nums.forEach((number)=>{
    console.log(`the number is : ${number}`);
})

