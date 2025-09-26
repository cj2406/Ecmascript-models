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
