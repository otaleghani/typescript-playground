"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// This is basically the type definition of a function
function greeter(fn) {
    fn("hello world");
}
function printToConsole(s) {
    console.log(s + "hi");
}
greeter(printToConsole);
function greeter2(fn) {
    fn("hello");
}
greeter2(printToConsole);
function doSomething2(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunc(someArg) {
    return someArg > 3;
}
myFunc.description = "default description";
doSomething2(myFunc);
function fn(ctor) {
    return new ctor("hello");
}
// Generics functions
// This func uses any, which is not optimal
function firstElement1(arr) {
    return arr[0];
}
// we could use generics to solve this problem
function firstElement(arr) {
    return arr[0];
}
var s = firstElement(["a", "b", "c"]);
var n = firstElement([1, 2, 3]);
var u = firstElement([]);
// By using generics we can easily avoid any
// You can even use generics with multiple types
function map(arr, func) {
    return arr.map(func);
}
var parsed = map(["1", "2", "3"], function (n) { return parseInt(n); });
console.log(parsed);
// You can limit the type that you have on generics with constrains
function longest(first, second) {
    if (first.length > second.length) {
        return first.length;
    }
    return second.length;
}
var first = [1, 2, 3];
var second = [1, 2, 3, 4];
console.log(longest(first, second));
console.log(longest("sandro", "pertini"));
// console.log(longest(10, 100)) // This would throw an error because the number type does not have length
// Remember that type inference can be done both on the definition and on the call
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
var arr = combine([1, 2, 3], [4, 5, 6]);
console.log(arr);
var arr1 = combine([1, 2, 3], ["4", "5", "6"]);
console.log(arr1);
// This will not throw an error because we specified that the type COULD BE EITHER number | string
// Functions can have optional parameters
function f(x) {
    console.log("something");
}
// You just define an optional parameter with x?:
// This automatically makes it that x could be number or undefined
function f2(x) {
    if (x === void 0) { x = 10; }
    console.log(x);
}
f2();
f2(11);
f2(undefined);
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(d, mOrTimestamp, y);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
// This function makeDate could be called with 1 or 3 params. Not 2, not 4.
console.log(makeDate(12345678));
console.log(5, 4, 3);
// console.log(5,4) // This will throw an error
// Remember that the type has to match between every signature
// Other things thta you should take in consideration:
// : function -> A type that's equal to () => any
// : never -> A type that is never possible
// : unknown -> Like any, but it doesn't disable ts 
// : object -> a js object, different from Object
// : void -> a function that does not return anything, different from undefined
// Rest paramenters
// Basically like variadic functions in golang
function multiply(n) {
    var m = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        m[_i - 1] = arguments[_i];
    }
    return m.map(function (x) { return n * x; });
}
// You need to add ... to the variadic arg
console.log(multiply.apply(void 0, __spreadArray([2], [1, 2, 3], false)));
// Type deconstruction
// You can define the type of an object like this
function sum(_a) {
    var a = _a.a, b = _a.b, c = _a.c;
    console.log(a + b + c);
}
var func1 = function () {
    return true;
};
var func2 = function () { return true; };
var func3 = function () {
    return true;
};
var var1 = func1();
var var2 = func2();
var var3 = func3();
console.log(var1, var2, var3);
// If a functoin has a void literal type definition, it cannot return 
// anything BUT void
function func4() {
    return;
}
