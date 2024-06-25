"use strict";
// anonymous object
function greet0(person) {
    return "Hello " + person.name;
}
function greet1(person) {
    return "Hello " + person.name;
}
function greet2(person) {
    return "Hello " + person.name;
}
// You'll need guard clause
function paintShape(opts) {
    var xPos = opts.xPos === undefined ? 0 : opts.xPos;
    var yPos = opts.yPos === undefined ? 0 : opts.yPos;
    console.log(opts.shape, xPos, yPos);
}
// Can also be done with default values
function paintShape2(_a) {
    var shape = _a.shape, _b = _a.xPos, xPos = _b === void 0 ? 0 : _b, _c = _a.yPos, yPos = _c === void 0 ? 0 : _c;
    console.log(shape, xPos, yPos);
}
function doSomething0(obj) {
    // obj.prop = "Helo" // Will cause an error
    obj.data.age++;
    obj.data.name = "helo";
}
var writablePerson = {
    name: "Person",
    age: 42,
};
// This is basically an alias, so you are modifying readonlyPerson throgh writablePerson
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
var asd = {
    id: 2,
    sandro: 1,
    alberto: 2,
};
console.log(asd["sandro"]);
console.log(asd["alberto"]);
console.log(asd.id);
var box1 = {
    content: 1,
};
if (typeof box1.content === "string") {
    console.log(box1.content.toLowerCase());
}
// We could even use assertion, but this is not the best, is error prone
console.log(box1.content.toLowerCase());
