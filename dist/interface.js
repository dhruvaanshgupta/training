"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//create an interface but dont want all the properties to be provided
//just put a question mark against the field you want to make optional
let user = { name: "dhruv", id: 1, email: "adsda" };
let employee = {
    name: "dhruv",
    id: 1,
    email: "adsda",
    salary: 76533,
};
//object destructuring - instead of calling user.name and user.email to access
let { name: userName, email: userLogin } = {
    name: "dhruv",
    id: 1,
    email: "adsda",
};
//array destructuring
let [user1, user2, ...restUsers] = [
    { name: "dhruv", id: 1, email: "adsda" },
    { name: "dhruv2", id: 2, email: "adsda" },
    { name: "dhruv3", id: 3, email: "adsda" },
    { name: "dhruv4", id: 4, email: "adsda" },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
console.log(result);
//DECORATORS
