// Arrow functions need to be initialized beforehand
const anotherFunction = (name, surname) => { console.log(`My name is ${name}, ${name} ${surname}`)};

setTimeout(() => {
  console.log("im second")
}, 100);

setTimeout(() => {
  console.log("im first")
}, 50)

setTimeout(theFunction, 300, "sandro", "pertini");
setTimeout(anotherFunction, 400, "alberto", "angela");

// Normal function are whatever, define them where you see fit
function theFunction(name, surname) {
  console.log(`My name is ${name}, ${name} ${surname}`);
}

// setTimeout to 0 will exec as soon as possible
// Useful if you want to queue a function without block the main thread
// setTimeout returns if you want the id of the timer. same thing does
// setInterval -> this will run every x milliseconds

const idInterval = setInterval(() => { console.log("helo") }, 100);

setTimeout(() => { clearInterval(idInterval) }, 1000);

let count = 0;
const idInterval2 = setInterval(() => {
  if (count === 5) {
    clearInterval(idInterval2);
  }
  console.log(`im on ${count} meth pills`);
  count++
}, 200);
