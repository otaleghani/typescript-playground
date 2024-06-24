"use strict";
// narrowing is basically how ts understands if a type is x or y
function padLeft(padding, input) {
    // If you press "K" on the var you can actually see the type
    // of the variable
    if (typeof padding === "number") {
        // Here ts understands that you created a type clause for the number
        // type and so treats padding in this scope as a number
        return " ".repeat(padding) + input;
    }
    // Here on the other hand we didn't suffice the if statement
    // so here on out padding is treated as a string
    return padding + input;
}
console.log(padLeft(3, "sandro"));
var sandro = {
    name: "sandro",
    swim: function () {
        console.log("".concat(this.name, " is swimming. Look at him go!"));
    }
};
var gennaro = {
    name: "gennaro",
    fly: function () {
        console.log("".concat(this.name, " is flying. Look at him go!"));
    }
};
function move(animal) {
    if ("swim" in animal) {
        animal.swim();
    }
    else {
        animal.fly();
    }
}
move(gennaro);
move(sandro);
