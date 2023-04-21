let lname : string;
lname = "dhruv";
let newname = lname.toUpperCase();
console.log(newname);

let age : number;
age = 25;
age = 25.5;

//storing string        
let dob = "25";

//result will be number 
let result = parseInt(dob);

//boolean in ts is not default to false so we have to define it.
let isvalid : boolean =false;
console.log(isvalid);


//syntax to define array in ts
let empList : string[];
empList = ["dhruv", "dhruv1", "dhruv2"];
//or
let numList : Array<number>;
numList = [1,2,3,4];

//filter for numbers greater than 2
let results = numList.filter((num)=> num>2);
console.log(results);

//find
// let search = empList.find((emp)=> emp==='dhruv');
// console.log(search);

//reduce
let sum = numList.reduce((acc,num)=> acc + num);
console.log(sum);


//enum

enum color{
    red,
    green,
    blue
}

let c : color = color.blue;

//tuples

let swapNumbs : [first: number,second: number];
function swapNumbers(num1:number,num2:number) : [number,number]{
    return [num2,num1];
}
swapNumbs = swapNumbers(10,20);

//any

let department: any;

department = "IT";
department = 10;
