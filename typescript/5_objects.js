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
    content: "hello",
};
if (typeof box1.content === "string") {
    console.log(box1.content.toLowerCase());
}
// We could even use assertion, but this is not the best, is error prone
console.log(box1.content.toLowerCase()); // This will be an error 
function setContent(box, newContent) {
    box.content = newContent;
}
var box3 = { content: "anvedi oh" };
// By using a generic we can easly assig a different type with no problems
var box4 = { content: 2 };
function changeContent(box, content) {
    box.content = content;
}
// Here we created a generic function that takes in a generic and based
// on that generic changes the content of the box
// BY doing something like this we are basically removing the need for overload functions
changeContent(box3, "salve!");
changeContent(box4, 2);
// TS can infere the type of changeContent based on the passed box.
changeContent(box3, "salve per la seconda volta!");
// The type is infered using box, you can avoid adding the <string>
// Another important generic is Array, which is basically like adding [] at the
// end of a type
function arrayFunction(array) {
    array.forEach(function (element) {
        console.log(element);
    });
}
var myArray = ["helo", "world"];
arrayFunction(myArray);
var pair1 = ["anvedi oh", 1];
function printPair(pair) {
    var stringPair = pair[0], numberPair = pair[1];
    // The deconstruction will assign the right type to the right index
    console.log(stringPair, numberPair);
}
var ot1 = ["io ne ho", "solo due"];
var ot2 = ["io ne ho", "anche un terzo", 3];
console.log(ot1.length);
console.log(ot2.length);
// There are also readonly tuples with readonly before the definition
