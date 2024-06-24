"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var number = 3;
var string = "3";
var boolean = false;
var array = [1, 2, 3];
var array2 = [1, 2, 3];
console.log(typeof array);
console.log(typeof array2);
// any litterally disable every type check
var obj = { x: 0 };
// obj.Foo(); // This ofc will throw an error
// obj();
// obj.bar = 100;
// You can define input and output of a function
function greet(name) {
    var result = "Hello ".concat(name, ", you can fuck off now.");
    console.log(result);
    return result;
}
greet("stocazzo");
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
function favNumber() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 26];
        });
    });
}
var myPromise = new Promise(function (resolve, reject) {
    var success = true;
    if (success) {
        resolve(1);
    }
    reject(0);
});
function test() {
    return __awaiter(this, void 0, void 0, function () {
        var awaitFavNumber, favNum;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    awaitFavNumber = favNumber();
                    return [4 /*yield*/, Promise.all([awaitFavNumber])];
                case 1:
                    favNum = (_a.sent())[0];
                    console.log(favNum);
                    myPromise
                        .then(function (result) {
                        console.log(result);
                    })
                        .catch(function (err) {
                        console.log(err);
                    })
                        .finally(function () {
                        console.log();
                    });
                    return [2 /*return*/];
            }
        });
    });
}
test();
function printPoint(pt) {
    console.log("PRINTING POINT");
    console.log(pt.x);
    console.log(pt.y);
    console.log("FINISHED PRINTING POINT");
}
printPoint({ x: 1, y: 2 });
function printName(name, surname) {
    console.log("PRINTING NAME");
    console.log(name);
    if (surname != undefined) {
        console.log(surname);
    }
    console.log("FINISHED PRINTING NAME");
}
printName("sandro");
printName("alberto", "foglia");
function printThis(x) {
    // remember that typescript will accept only methods call that are 
    // possible with all of the union types
    console.log("im printing this: ".concat(x));
    // else you'll need to use a typeof
    // for arrays you will use
    // Array.isArray(x)
    if (typeof x === "string") {
        console.log(x.toUpperCase());
    }
    else {
        console.log(x * 2);
    }
}
printThis("asd");
printThis(1);
function printCoord(p) {
    console.log(p.x);
    console.log(p.y);
}
printCoord({ x: 20, y: 40 });
var id = {
    name: "seppia",
};
printName(id.name);
var id2 = {
    name: "seppia",
    surname: "sempronia",
};
printName(id2.name, id2.surname);
// type assertion
// ts cannot know that this element is a CanvasElement
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// Literal types
var hello = "helo"; // Here we are basically saying this string can ONLY be "helo"
// hello = "sandro" // this will throw an error
var align = "center";
align = "left"; // no error here
function configure(x) {
    console.log(x);
}
configure("auto");
configure({ width: 30, height: 30, weigth: 50 });
// as const -> makes object parameters act like type
function handleRequest(url, method) {
    console.log(url, method);
}
;
var req = { url: "example.com/", method: "GET" };
handleRequest(req.url, req.method); // Here ts will complain because "GET" is : string, not "GET" | "POST"
// so here you can infere the type of req.method with "as "GET"" or infere the type in the declaration with
// method: "GET" as "GET"
var req2 = { url: "example.com/", method: "GET" };
handleRequest(req2.url, req2.method);
// or you could use the "as const" in the declaration.
// basically "as const" makes everything that you declare 
// beign treated as a const (so like "GET" is not :string but :"GET")the "as const" in the declaration.
// basically "as const" makes everything that you declare 
// beign treated as a const (so like "GET" is not :string but :"GET")
var req3 = { url: "example.com/", method: "GET" };
handleRequest(req3.url, req3.method);
// Here x could be number or null
function doSomething(x) {
    // if we try to multiply x we could multiply null 
    // For this reason we should always activate the "strictNullChecks" in
    // the tsconfig.json. With this the linter will find this error and ask
    // for comfermation
    if (x === null) {
        return;
    }
    console.log(x * 2);
}
doSomething(2);
