"use strict";
let lname;
lname = "dhruv";
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 25;
age = 25.5;
//storing string        
let dob = "25";
//result will be number 
let result = parseInt(dob);
//boolean in ts is not default to false so we have to define it.
let isvalid = false;
console.log(isvalid);
//syntax to define array in ts
let empList;
empList = ["dhruv", "dhruv1", "dhruv2"];
//or
let numList;
numList = [1, 2, 3, 4];
//filter for numbers greater than 2
let results = numList.filter((num) => num > 2);
console.log(results);
//find
// let search = empList.find((emp)=> emp==='dhruv');
// console.log(search);
//reduce
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
//enum
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
let c = color.blue;
//tuples
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
//any
let department;
department = "IT";
department = 10;
