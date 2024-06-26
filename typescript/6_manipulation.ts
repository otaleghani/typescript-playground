// class Generic<Type> {
//   zeroValue: Type;
//   add: (x: Type, y: Type) => Type;
// }

// Here we are creating a function
function identity<Type>(arg: Type): Type {
  return arg
}
// Here we are defining a var to store said function
// As you can see you can call your generic type as you want
let myIdentity1: <Type>(arg: Type) => Type = identity
let myIdentity2: <Input>(arg: Input) => Input = identity

// You can define it as an object
let myIdentity3: { <Type>(arg: Type): Type } = identity;

// Or you can define it in advance with an interface
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

console.log(myIdentity1(1))
console.log(myIdentity2(1))


// You can constrain a type by extending a generic type
interface LengthArg {
  length: number;
}
function logLength<Type extends LengthArg>(arg: Type): number{
  return arg.length
}

// Keyof basically takes an object and returns a type 
// with said object parameters as values
type Point2 = { x: number; y: number; };
type P = keyof Point2;
let somePoint: P = "x";
somePoint = "y";
console.log(somePoint)

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>

function f() {
  return { x: 10, y: 3 };
}
type T = ReturnType<typeof f>;
