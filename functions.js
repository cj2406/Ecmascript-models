//THIS IS A FILE containing basic functions
//  which i will use to demonstrate modules

/*
MODULES are reusable pieces of code that you can split into
 separate files and then import/export as needed
 */

//I used the export keyword to ensure these functions
//  can be accesed outside this file
export function displayNumbers(){
    let numbers=[1,5,7,3,9,0,7];
    console.log(numbers);
}

export const displayGrades= ()=>{
    let grades=['A','B','C','E','F'];
    console.log(`the grade is ${grades}`)
}