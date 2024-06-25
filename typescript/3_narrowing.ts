// narrowing is basically how ts understands if a type is x or y
function padLeft(padding: number | string, input: string): string {
  // If you press "K" on the var you can actually see the type
  // of the variable
  if (typeof padding === "number") {
    // Here ts understands that you created a type clause for the number
    // type and so treats padding in this scope as a number
    return " ".repeat(padding) + input 
  }
  // Here on the other hand we didn't suffice the if statement
  // so here on out padding is treated as a string
  return padding + input
}

console.log(padLeft(3, "sandro"))

type Fish = {
  name: string,
  swim: () => void; 
}
type Bird = {
  name: string,
  fly: () => void;
}
type Human = {
  name: string,
  // Here the ? means that the Human COULD have swim or fly
  // but those could be null or undefiened
  swim?: () => void;
  fly?: () => void;
}

let sandro: Fish = {
  name: "sandro",
  swim: function() {
    console.log(`${this.name} is swimming. Look at him go!`)
  }
}
let gennaro: Bird = {
  name: "gennaro",
  fly: function() {
    console.log(`${this.name} is flying. Look at him go!`)
  }
}

function move(animal: Fish | Bird | Human): void {
  // Here the "in" opearation is used to understand if animal contains the "swim" attribute
  if ("swim" in animal && animal.swim != undefined) {
    animal.swim()
  } else if ("fly" in animal && animal.fly != undefined) {
    animal.fly() 
  }
}

class Human2 {}

function move2(animal: Fish | Bird | Human2): void {
  // In the case of classes you could use the instanceof guard clause
  if (animal instanceof Human2) {
    console.log("Wait, this is a human!");
  }
}

move(gennaro)
move(sandro)

// Assignment is the one that declares a value type.
// In this case x could be number or string
let x = Math.random() < 0.5 ? 10 : "Hello world";
x = 1; // We can define it as a numeber
console.log(x)
x = "goodbye" // And as a string
// x = {} // We cannot define it as a object, because the ASSIGNMENT is the one deciding the type
console.log(x)

// Helper function see more after
function getSmallPet(): Fish | Bird {
  if (Math.random() > 0.5) {
    let gennaro: Bird = {
      name: "gennaro",
      fly: function() {
        console.log(`${this.name} is flying. Look at him go!`)
      }
    }
    return gennaro
  }
  let sandro: Fish = {
    name: "sandro",
    swim: function() {
      console.log(`${this.name} is swimming. Look at him go!`)
    }
  }
  return sandro
}

// Another way to do guard clause is with type predicates
// Basically are functions that give more direct control over the type checks
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
  // See how you can assert the type and then call a method with ()
}

let pet = getSmallPet()
if (isFish(pet)) {
  console.log("is fish");
  pet.swim()
} else {
  console.log("is bird");
  pet.fly()
}

// Here is the same, we are saying this array is of Fish | Bird
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet()];

// Here we use filter to get only the items that are true to isFish
const underwater1: Fish[] = zoo.filter(isFish);

// here we do type assertion
const underwater2: Fish[] = zoo.filter(isFish) as Fish[]; 

// here we filter with a more complex example
const underwater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "gennaro") return false;
  return isFish(pet);
});

// In typescript you have to NARROW DOWN every single time that 
// you have a possibility between different types. Let's take into
// consideration this piece of code

type Shape0 = {
  // kind, being a literal type, defines a guard for misspelling
  kind: "square" | "circle";
  radius?: number;
  side?: number;
}

// This "Shape" could be a square that has a side property or a circle
// that has a radius property. Those properties could be null,
// because a circle will not have side defined and square will not 
// have a radius defined.

function getArea0(shape: Shape0): number {
  // if (shape.kind === "sandro") // Error! Kind can be only square or circle
  if (shape.kind === "square") {
    // return shape.side * 2 // this will error because side is possibly undefined
    return shape.side! * 2
    // So we have to use the ! to tell typescript that we are SURE that side is not undefined
  }
  return 0
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

type Shape = Circle | Square

// If we divide the two we can use the "kind" property, available in both, to 
// differentiate the two type from "Shape". We need to narrow down every single
// time that you have more than one possible type
function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * 2;
}

// We could even call this in a switch case
function getArea2(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.side * 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
    default:
      return 0;
  }
}

