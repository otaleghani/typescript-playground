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

function move(animal: Fish | Bird): void {
  // Here the "in" opearation is used to understand if animal contains the "swim" attribute
  if ("swim" in animal) {
    animal.swim()
  } else {
    animal.fly() 
  }
}

move(gennaro)
move(sandro)
