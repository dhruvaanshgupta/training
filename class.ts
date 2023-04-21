import {Login, User} from './interface';



//interface created
interface Address{
  street : string;
  city : string;
  state : string;
  pin : string;
}



class Employee implements Login {
  //# means private
  #id: number;

  protected name: string;

  address: Address;

  //getters and setters

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  //can be accessed with the classname
  static getEmploymentCount(): number {
    return 50;
  }

  //constructor
  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.address = address;
    this.name = name;
  }

  Login(): User {
    
      return {name : "dhruv", id:1 ,email : "adsda"};
  }

  //methods
  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}
//instance
let john = new Employee(1, "john", {street: "ABC", city:"ghaziabad", state:"U.P.", pin:"201001"});

//calling setter and getter

john.empId = 100; //setter

console.log(john.empId); //getter

//class to access protected method from parent class.

class manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }
  //inherits methods from parent class, here we change the method but if we dont it will inherit fromm parent.
  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

let address = john.getNameWithAddress();
console.log(address);
console.log(john);
let mike = new manager(2, "Mike", {street: "ABC", city:"ghaziabad", state:"U.P.", pin:"201001"});
let address2 = mike.getNameWithAddress();
console.log(mike);
console.log(address2);

//calling the static methods
//Employee.getEmploymentCount();
