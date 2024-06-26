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
let box3: Box3<string> = { content: "anvedi oh" }
// By using a generic we can easly assig a different type with no problems
let box4: Box3<number> = { content: 2 }

function changeContent<Type>(box: Box3<Type>, content: Type): void {
  box.content = content;
}
// Here we created a generic function that takes in a generic and based
// on that generic changes the content of the box
// BY doing something like this we are basically removing the need for overload functions

changeContent(box3, "salve!")
changeContent(box4, 2)
// TS can infere the type of changeContent based on the passed box.
changeContent<string>(box3, "salve per la seconda volta!")
// The type is infered using box, you can avoid adding the <string>

// Another important generic is Array, which is basically like adding [] at the
// end of a type

function arrayFunction(array: Array<string>) {
  array.forEach(element => {
    console.log(element);
  });
}

let myArray: string[] = ["helo", "world"];
arrayFunction(myArray)
// string[] is the shorthand of Array<string>
// Arrays can also be generics

// interface Array<Type> {
//   lenght: number; 
//   pop(): Type | undefined;
//   push(...items: Type[]): number;
// }

// Other generics other than Array are Set, Map and Promise, cause they can have any kind of data inside

// It also exists a readonly version of Array<Type> which is ReadonlyArray<Type>
// You can call it with ReadonlyArray<Type> or with readonly Type[]

// ReadonlyArrays cannot be constructed with New 
// new ReadonlyArray("No", "can", do");

// But this thing could be assigned to a new value
// const roArray: ReadonlyArray<string> = ["yes", "can", "do"];

// Tuples are basically arrays of known size and types
type StringNumberPair = [string, number]
const pair1: StringNumberPair = ["anvedi oh", 1]

function printPair(pair: StringNumberPair) {
  const [ stringPair, numberPair ] = pair;
  // The deconstruction will assign the right type to the right index
  console.log(stringPair, numberPair)
}
// tuples, beign like arrays, have the property of length
interface TupleStructure {
  length: 2;
  0: string;
  1: number;
}
// Tuple can also have optional types at the end, which will change the length property

type OptionalTuple = [string, string, number?];
const ot1: OptionalTuple = ["io ne ho", "solo due"]
const ot2: OptionalTuple = ["io ne ho", "anche un terzo", 3]
console.log(ot1.length)
console.log(ot2.length)

// this is a strange tuple thing. We can define things before and after an array
type ArrayTuple1 = [string, number, ...boolean[]];
type ArrayTuple2 = [string, ...boolean[], number];
type ArrayTuple3 = [...boolean[], string, number];

// There are also readonly tuples with readonly before the definition

