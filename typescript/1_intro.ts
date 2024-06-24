let helloWorld: string = "hello";     // definition
let helloWorld2 = "hello";            // inference

interface User {                      // interface definition
  name: string;
  age: number;
}

const user_1: User = {                  // defyning an inrterface
  name: "Hayes",
  age: 17,
}

class UserAccount {
  name: string;
  age: number;

  constructor(name:string, age:number){
    this.name = name;
    this.age = age
  }
}

const user_2:User = new UserAccount("sandro", 2);

function addUser(user:User) {           // declares the func arg
  return user
}
function getUser(): User {              // declares the func return
  return { name: "sandro", age: 4 }
}

// Composing type | Union
type WindowState = "open" | "closed" | "minimized";
type luckyNumber = 3 | 5 | 7;

// function that accepts both string or number
function getLength(data: string | number): number {
  // typeof gives you a way to learn the type
  if (typeof data === "number") {
    return data
  }
  if (typeof data === "string") {
    return data.length
  }
  return 0
}

console.log(getLength(1))
console.log(getLength("sandro"))

// composing type | generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type UserArray = Array<User>;

// this is interesting
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
  value: Type
}



declare const backpack: Backpack<number>;
const object = backpack.get();
backpack.add(23);
const object2 = backpack.get();
console.log(object)
console.log(object2)
