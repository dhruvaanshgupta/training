"use strict";
//method 1 to write functions
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
//method 2 to write functions
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
//method 3
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(2, 3));
//make a argument optional 
function add2(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2; //if num3 exists else if no num3 exists.
}
console.log(add2(3, 5));
//make a required parameter
const sub2 = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub2(2, 3));
console.log(sub2(2, 3, 5));
//Rest Parameters
function add3(num1, num2, num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add3(3, 5, [...numbers]));
//generic parameters
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
console.log(concatResult);
let concatString = getItems(["a", "b", "c", "d", "e"]);
