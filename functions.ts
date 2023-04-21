//method 1 to write functions

function add(num1 : number, num2 : number) : number{
    return num1 + num2;
}

console.log(add(2,3));


//method 2 to write functions

const sub = (num1: number, num2: number) : number => num1 - num2;

console.log(sub(2,3));

//method 3

const mult = function(num1 : number, num2 : number) : number{
    return num1 * num2;
}

console.log(mult(2,3));

//make a argument optional 

function add2(num1 : number, num2 : number, num3?: number) : number{
    return num3? num1 + num2 + num3 : num1 +num2; //if num3 exists else if no num3 exists.
}
console.log(add2(3,5));

//make a required parameter
const sub2 = (num1: number, num2: number, num3 = 10) : number => num1 - num2 - num3;

console.log(sub2(2,3));
console.log(sub2(2,3,5));

//Rest Parameters

function add3(num1 : number, num2 : number, num3:number[]) : number{
    return num1 + num2 + num3.reduce((a,b) => a+b, 0); }
let numbers = [1,2,3,4,5];
console.log(add3(3,5,[...numbers]));

//generic parameters

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems<number>([1,2,3,4,5]);
console.log(concatResult);

let concatString = getItems<string>(["a","b","c","d","e"]);
