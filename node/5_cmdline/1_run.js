#!/usr/bin/env node
const ProgressBar = require('progress');
// You can call node with a shbang
console.log("helo")

// You access env var with process.env
console.log(process.env.USER_ID);

console.log(process.env.USER_ID2);
// You can even specify a new env var using --env-file=.env
// If you have that var already exported that will be taken
// There is a heiarchy

// Counts how many times a line has been printed
const numbers = [1,2,3,4,5,6,7,8,9,0,0,0,0,0,0]
numbers.forEach(number => {
  console.count(number);
});

// prints the trace 
const function2 = () => console.trace();
const function1 = () => function2();
function1()

// prints time from .time to .timeEnd
const doSomething = () => console.log("something");
const measureDoingSomething = () => {
  console.time('doSomething()');
  doSomething()
  console.timeEnd('doSomething()');
};
measureDoingSomething();

// stdout or err
console.log("something") // prints on the stdout
console.error("something") // prints on the stderr

// working with external packages 
const bar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
