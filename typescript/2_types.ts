const number: number = 3;
const string: string = "3";
const boolean: boolean = false

const array: Array<number> = [1,2,3];
const array2: number[] = [1,2,3];

console.log(typeof array)
console.log(typeof array2)

// any litterally disable every type check
let obj: any = { x: 0 };
// obj.Foo(); // This ofc will throw an error
// obj();
// obj.bar = 100;

// You can define input and output of a function
function greet(name: string): string {
  let result = `Hello ${name}, you can fuck off now.`;
  console.log(result);
  return result
}
greet("stocazzo")

// async function test() {
//   let number = await favNumber()
//   console.log(number)
// }

// let myPromise = new Promise((resolve, reject) => {
//   let number = favNumber()
//   if (number) {
//     resolve("done")
//   } else {
//     reject("not done")
//   }
// })
// console.log(myPromise)

async function favNumber(): Promise<number>{
  return 26;
}
let myPromise: Promise<number> = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve(1)
  }
  reject(0)
});

async function test() {
  const awaitFavNumber: Promise<number> = favNumber();
  const [favNum] = await Promise.all([awaitFavNumber])
  console.log(favNum)
  
  myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log();
    });
}
test()

function printPoint(pt: {x: number, y: number}): void{
  console.log("PRINTING POINT")
  console.log(pt.x)
  console.log(pt.y)
  console.log("FINISHED PRINTING POINT")
}
printPoint({x:1, y:2});

function printName(name: string, surname?: string) {
  console.log("PRINTING NAME")
  console.log(name)
  if (surname != undefined) {
    console.log(surname)
  }
  console.log("FINISHED PRINTING NAME")
}
printName("sandro")
printName("alberto", "foglia")

function printThis(x: string | number) {
  // remember that typescript will accept only methods call that are 
  // possible with all of the union types
  console.log(`im printing this: ${x}`)
  
  // else you'll need to use a typeof
  // for arrays you will use
  // Array.isArray(x)
  if (typeof x === "string") {
    console.log(x.toUpperCase());
  } else {
    console.log(x*2);
  }
}
printThis("asd")
printThis(1)

type Point = {
  x: number;
  y: number;
}
function printCoord(p: Point): void {
  console.log(p.x)
  console.log(p.y)
}
printCoord({x:20, y:40});

// Difference between type and interface is that interface can be
// re-declared
type Id = string | number;
interface Id2 {
  name: string;
}
let id = {
  name: "seppia",
}
printName(id.name)

interface Id2 {
  surname: string;
}

let id2 = {
  name: "seppia",
  surname: "sempronia",
}
printName(id2.name, id2.surname)

// type assertion
// ts cannot know that this element is a CanvasElement
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// Literal types
let hello: "helo" = "helo" // Here we are basically saying this string can ONLY be "helo"
// hello = "sandro" // this will throw an error

let align: "left" | "right" | "center" = "center";
align = "left" // no error here

interface Options {
  width: number;
  height: number;
  weigth: number;
}
function configure(x: Options | "auto") {
  console.log(x)
}
configure("auto")
configure({width: 30, height: 30, weigth: 50})

// as const -> makes object parameters act like type
function handleRequest(url: string, method: "GET" | "POST"): void {
  console.log(url, method)
};

const req = { url: "example.com/", method: "GET" as "GET" }
handleRequest(req.url, req.method) // Here ts will complain because "GET" is : string, not "GET" | "POST"
// so here you can infere the type of req.method with "as "GET"" or infere the type in the declaration with
// method: "GET" as "GET"

const req2 = { url: "example.com/", method: "GET" }
handleRequest(req2.url, req2.method as "GET") 

// or you could use the "as const" in the declaration.
// basically "as const" makes everything that you declare 
// beign treated as a const (so like "GET" is not :string but :"GET")the "as const" in the declaration.
// basically "as const" makes everything that you declare 
// beign treated as a const (so like "GET" is not :string but :"GET")

const req3 = { url: "example.com/", method: "GET" } as const
handleRequest(req3.url, req3.method) 

// Here x could be number or null
function doSomething(x: number | null) {
  // if we try to multiply x we could multiply null 
  // For this reason we should always activate the "strictNullChecks" in
  // the tsconfig.json. With this the linter will find this error and ask
  // for comfermation
  if (x === null) {
    return
  }
  console.log(x*2)
}
doSomething(2)
