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
    // Here the "in" opearation is used to understand if animal contains the "swim" attribute
    if ("swim" in animal && animal.swim != undefined) {
        animal.swim();
    }
    else if ("fly" in animal && animal.fly != undefined) {
        animal.fly();
    }
}
var Human2 = /** @class */ (function () {
    function Human2() {
    }
    return Human2;
}());
function move2(animal) {
    // In the case of classes you could use the instanceof guard clause
    if (animal instanceof Human2) {
        console.log("Wait, this is a human!");
    }
}
move(gennaro);
move(sandro);
// Assignment is the one that declares a value type.
// In this case x could be number or string
var x = Math.random() < 0.5 ? 10 : "Hello world";
x = 1; // We can define it as a numeber
console.log(x);
x = "goodbye"; // And as a string
// x = {} // We cannot define it as a object, because the ASSIGNMENT is the one deciding the type
console.log(x);
// Helper function see more after
function getSmallPet() {
    if (Math.random() > 0.5) {
        var gennaro_1 = {
            name: "gennaro",
            fly: function () {
                console.log("".concat(this.name, " is flying. Look at him go!"));
            }
        };
        return gennaro_1;
    }
    var sandro = {
        name: "sandro",
        swim: function () {
            console.log("".concat(this.name, " is swimming. Look at him go!"));
        }
    };
    return sandro;
}
// Another way to do guard clause is with type predicates
// Basically are functions that give more direct control over the type checks
function isFish(pet) {
    return pet.swim !== undefined;
    // See how you can assert the type and then call a method with ()
}
var pet = getSmallPet();
if (isFish(pet)) {
    console.log("is fish");
    pet.swim();
}
else {
    console.log("is bird");
    pet.fly();
}
// Here is the same, we are saying this array is of Fish | Bird
var zoo = [getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet(), getSmallPet()];
// Here we use filter to get only the items that are true to isFish
var underwater1 = zoo.filter(isFish);
// here we do type assertion
var underwater2 = zoo.filter(isFish);
// here we filter with a more complex example
var underwater3 = zoo.filter(function (pet) {
    if (pet.name === "gennaro")
        return false;
    return isFish(pet);
});
// This "Shape" could be a square that has a side property or a circle
// that has a radius property. Those properties could be null,
// because a circle will not have side defined and square will not 
// have a radius defined.
function getArea0(shape) {
    // if (shape.kind === "sandro") // Error! Kind can be only square or circle
    if (shape.kind === "square") {
        // return shape.side * 2 // this will error because side is possibly undefined
        return shape.side * 2;
        // So we have to use the ! to tell typescript that we are SURE that side is not undefined
    }
    return 0;
}
// If we divide the two we can use the "kind" property, available in both, to 
// differentiate the two type from "Shape". We need to narrow down every single
// time that you have more than one possible type
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    return shape.side * 2;
}
// We could even call this in a switch case
function getArea2(shape) {
    switch (shape.kind) {
        case "square":
            return shape.side * 2;
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        default:
            return 0;
    }
}
