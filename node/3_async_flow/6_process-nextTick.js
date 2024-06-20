// this gets exec immediatly (CYCLE 0)
console.log('consoleLog');

// timeout 0 gets put on the queue
// CYCLE 1
setTimeout(() => {
  console.log('setTimeout')
}, 1);

// immediate gets put on top of the queue
// CYCLE 1
setImmediate(() => { 
  console.log('setImmediate')
});

// process nextTick puts this function on the end of the current operation
// CYCLE 0
process.nextTick(() => {
  console.log('process.nextTick')
});
