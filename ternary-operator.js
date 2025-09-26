//I'll go through the three known ternary operators


let age=17;
//
let canDrive=age>=18 ? "yes you can drive":"no you can't drive";
console.log(canDrive);

//the or operator  ---if the first isnt true then the secong will run hence the term guard operator
age>=20||console.log("you can't apply for this job");

//the and guard operator  ---if the first isnt true then the second can't run hence the term guard operator
age>=18&&console.log("you are allowed to vote")