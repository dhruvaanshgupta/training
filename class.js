"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    //getters and setters
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    //can be accessed with the classname
    static getEmploymentCount() {
        return 50;
    }
    //constructor
    constructor(id, name, address) {
        //# means private
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.address = address;
        this.name = name;
    }
    Login() {
        return { name: "dhruv", id: 1, email: "adsda" };
    }
    //methods
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
_Employee_id = new WeakMap();
//instance
let john = new Employee(1, "john", { street: "ABC", city: "ghaziabad", state: "U.P.", pin: "201001" });
//calling setter and getter
john.empId = 100; //setter
console.log(john.empId); //getter
//class to access protected method from parent class.
class manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    //inherits methods from parent class, here we change the method but if we dont it will inherit fromm parent.
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let address = john.getNameWithAddress();
console.log(address);
console.log(john);
let mike = new manager(2, "Mike", { street: "ABC", city: "ghaziabad", state: "U.P.", pin: "201001" });
let address2 = mike.getNameWithAddress();
console.log(mike);
console.log(address2);
//calling the static methods
//Employee.getEmploymentCount();
