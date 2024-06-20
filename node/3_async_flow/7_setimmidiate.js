const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');       // 0
  setImmediate(baz);          // 4
  new Promise((resolve, reject) => {
    resolve('bar');           
  }).then(resolve => {
    console.log(resolve);     // 2
    process.nextTick(zoo);    // 3
  });
  process.nextTick(foo);      // 1
};

start();
