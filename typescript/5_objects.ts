// anonymous object
function greet0(person: { name: string, age: number }) {
  return "Hello " + person.name;
}

// named object
interface Person {
  name: string;
  age: number;
}
function greet1(person: Person) {
  return "Hello " + person.name;
}

// type alias
type PersonType = {
  name: string;
  age: number;
}
function greet2(person: PersonType) {
  return "Hello " + person.name;
}

// optional properties
interface PaintOptions {
  shape: string;
  xPos?: number;
  yPos?: number;
}

// You'll need guard clause
function paintShape(opts: PaintOptions) {
  let xPos = opts.xPos === undefined ? 0 : opts.xPos
  let yPos = opts.yPos === undefined ? 0 : opts.yPos
  console.log(opts.shape, xPos, yPos)
}

// Can also be done with default values
function paintShape2({ shape, xPos = 0, yPos = 0 }:PaintOptions) {
  console.log(shape, xPos, yPos)
}


// readonly creates an immutable value. but it's content can be changed
interface SomeType {
  readonly prop: string;
  readonly data: { name: string; age: number };
}
function doSomething0(obj: SomeType) {
  // obj.prop = "Helo" // Will cause an error
  obj.data.age++
  obj.data.name = "helo"
}

// You can make a readonly value editable by aliasing it
interface Person {
  name: string;
  age: number;
}
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person",
  age: 42,
}
// This is basically an alias, so you are modifying readonlyPerson throgh writablePerson
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age)
writablePerson.age++
console.log(readonlyPerson.age)

// this is a index signature
// basically is used when you don't know what keys an object has
interface Dict {
  [index: string]: number;
  // name: string, // This will throw error because an index with string exists
  id: number, // this is cool, nobody gives a fuck about this
}

const asd: Dict = {
  id: 2,
  sandro: 1,
  alberto: 2,
}

console.log(asd["sandro"])
console.log(asd["alberto"])
console.log(asd.id)

interface Dict2 {
  readonly [index: string]: number | string,
  id: number,
  name: string,
}
// Here we don't care if there are other strings or numbers

// Extend an interface or a type
interface Address {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalcode: string;
}
interface AddressWithUnit extends Address {
  unit: string;
}

interface Product {
  name_product: string;
  quantity: number;
}

// You can even extend multiple instances
interface Company extends Address, Product {}

// For types you do intersections
type Color = {
  color_name: string;
}
type Finish = {
  finish_name: string;
}
type CarExteriors = Color & Finish;

// Generic object types
// Immagine a Box type that could contain whatever
interface Box0 {
  content: any;
}
// Problem is that Box0.content disables typescript. So if we
// assign a number and then try to do .toUppercase() we will
// encounter a big fat juicy error
//
// We could be using "unknown", but this will lead to a lot of 
// type checks
interface Box1 {
  content: unknown;
}
let box1: Box1 = {
  content: "hello",
}

if (typeof box1.content === "string") {
  console.log(box1.content.toLowerCase());
}
// We could even use assertion, but this is not the best, is error prone
console.log((box1.content as string).toLowerCase()) // This will be an error 
// if you present this with something outside of string

// You could create a lot of different boxes, one for every type that you want
interface NumberBox {
  content: number;
}
interface StringBox {
  content: string;
}
interface BooleanBox {
  content: boolean;
}
// Problem is that this is a lot of boilerplace code... Imagine having to create a 
// setContent function
function setContent(box: StringBox, newContent: string): void;
function setContent(box: NumberBox, newContent: number): void;
function setContent(box: BooleanBox, newContent: boolean): void;
function setContent(box: { content: any }, newContent: any) {
  box.content = newContent;
}

// Best to use a simple generic type
interface Box3<Type> {
  content: Type;
}
