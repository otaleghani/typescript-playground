"use strict";
// This is basically the type definition of a function
function greeter(fn) {
    fn("hello world");
}
function printToConsole(s) {
    console.log(s + "hi");
}
greeter(printToConsole);
