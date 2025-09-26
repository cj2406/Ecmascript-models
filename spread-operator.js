//The spread operator (...)
/*
It’s used to expand (spread out) elements of an array, object,
 or iterable into individual elements.
 */
const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];

//here it spreads out the values in the arrays
let newArr=[...arr1,...arr2];
console.log(newArr);

//array cloning alowing one to duplicate an array easily
let arr3=[...arr1,4,39];
console.log(arr3);

// the rest operator can pass array elements as arguements
function sum(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

console.log(sum(...nums)); // 6
