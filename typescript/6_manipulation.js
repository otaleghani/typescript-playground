"use strict";
// class Generic<Type> {
//   zeroValue: Type;
//   add: (x: Type, y: Type) => Type;
// }
// Here we are creating a function
function identity(arg) {
    return arg;
}
// Here we are defining a var to store said function
// As you can see you can call your generic type as you want
var myIdentity1 = identity;
var myIdentity2 = identity;
// You can define it as an object
var myIdentity3 = identity;
console.log(myIdentity1(1));
console.log(myIdentity2(1));
function logLength(arg) {
    return arg.length;
}
var somePoint = "x";
somePoint = "y";
console.log(somePoint);
