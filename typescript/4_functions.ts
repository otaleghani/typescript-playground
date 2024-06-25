// This is basically the type definition of a function
function greeter(fn: (a: string) => void) {
  fn("hello world")
}
function printToConsole(s: string): void {
  console.log(s + "hi")
}
greeter(printToConsole)

// We could have defined a type for this function
type GreetFunction = (a: string) => void;

function greeter2(fn: GreetFunction): void {
  fn("hello")
}
greeter2(printToConsole)

// Here we are defining a call signature. Basically a call signature gives you the ability of
// defining properties. Like here we define description
type DescribableFunction = {
  description: string;
  (arg: number): boolean;
}

function doSomething2(fn: DescribableFunction): void {
  console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number): boolean {
  return someArg > 3;
}
myFunc.description = "default description"

doSomething2(myFunc)

// Consturct signature
// You can use the "new" keyword to refer as constructures, so functions that create a new object
type Constructor = {
  new (s: string): string;
}

function fn(ctor: Constructor) {
  return new ctor("hello")
}

// Generics functions
// This func uses any, which is not optimal
function firstElement1(arr: any[]) {
  return arr[0]
}

// we could use generics to solve this problem
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}
const s = firstElement(["a", "b", "c"])
const n = firstElement([1,2,3])
const u = firstElement([])
// By using generics we can easily avoid any

// You can even use generics with multiple types
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func)
}
const parsed = map(["1", "2", "3"], (n: string) => parseInt(n));
console.log(parsed)

// You can limit the type that you have on generics with constrains
function longest<Type extends { length: number }>(first: Type, second: Type): Number {
  if (first.length > second.length) {
    return first.length
  }
  return second.length
}

let first = [1,2,3]
let second = [1, 2, 3, 4]
console.log(longest(first, second))
console.log(longest("sandro", "pertini"))
// console.log(longest(10, 100)) // This would throw an error because the number type does not have length


// Remember that type inference can be done both on the definition and on the call
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

const arr = combine([1,2,3], [4,5,6]);
console.log(arr)

const arr1 = combine<number | string>([1,2,3], ["4","5","6"]);
console.log(arr1)
// This will not throw an error because we specified that the type COULD BE EITHER number | string

// Functions can have optional parameters
function f(x?: number) {
  console.log("something")
}
// You just define an optional parameter with x?:
// This automatically makes it that x could be number or undefined

function f2(x = 10) {
  console.log(x)
}
f2()
f2(11)
f2(undefined)
// Here on the other hand we are defining a default value, so that every time that x 
// is not defined in the func call we use the default value

// Functions Overloads
// Basically is away to call the same function with different kind of inputs
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(d, mOrTimestamp, y);
  } else {
    return new Date(mOrTimestamp);
  }
}

// This function makeDate could be called with 1 or 3 params. Not 2, not 4.
console.log(makeDate(12345678))
console.log(5,4,3)
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
function multiply(n: number, ...m: number[]): number[] {
  return m.map((x) => n * x)
}
// You need to add ... to the variadic arg
console.log(multiply(2, ...[1,2,3]))

// Type deconstruction
// You can define the type of an object like this
function sum({ a, b, c }: { a: number, b: number, c: number}) {
  console.log(a + b + c)
}

// Keep in mind that a function defined like this (a: string) => void
// CAN return something outside of void.

type voidFunc = () => void;
const func1: voidFunc = () => {
  return true
}
const func2: voidFunc = () => true;
const func3: voidFunc = () => {
  return true; 
}

const var1 = func1()
const var2 = func2()
const var3 = func3()

console.log(var1, var2, var3)

// If a functoin has a void literal type definition, it cannot return 
// anything BUT void
function func4(): void {
  return 
}
