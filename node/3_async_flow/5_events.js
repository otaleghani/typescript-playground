const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
  console.log('the thing started!');
});

eventEmitter.emit('start');

// Events have a key:string that can be called
// they can be called multiple times
eventEmitter.on('sus', (number) => {
  console.log(`number ${number}!`);
});

eventEmitter.emit('sus', 23);
eventEmitter.emit('sus', 23);
eventEmitter.emit('sus', 23);

// They can have multiple args
// they can be called only once with .once
eventEmitter.once('sandro', (name, surname) => {
  console.log(`${name} ${surname}`);
});

eventEmitter.emit('sandro', "sandro", "pertini")
eventEmitter.emit('sandro', "sandro", "pertini") // This will not trigger

// This removes the listener sus
eventEmitter.removeListener('sus', () => {});
eventEmitter.emit('sus', 23); // This will not print anything

eventEmitter.removeAllListeners()
eventEmitter.emit('start');
