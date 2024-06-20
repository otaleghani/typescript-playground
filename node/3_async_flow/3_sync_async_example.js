const { throws } = require('node:assert');
const fs = require('node:fs');

// const data = fs.readFileSync('./file.md'); 
// console.log(data)
// Sync means that this read is done Synchronously, so it's blocking

// fs.readFile('file.md', (err, data) => {
//   if (err) throw err;
//   console.log(data)
// });
// On the other hand readFile is done Asynchronously, so it's non blocking. Meaning you could run this piece of code and run at the same time some other thing

console.log("sandro")
// Take a look at this log, it will appear before readFile, but after readFileSync

// You shouln't mix sync and async functions, couse you could create some big concurrency problems.

// fs.readFile('file.md', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// fs.unlinkSync('file.md')
// unlink deletes the file. Basically this code will try to read the file and imidiately after delete it, making the read fail.


fs.readFile('file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
  fs.unlink('file.md', unlinkErr => {
    if (unlinkErr) throw unlinkErr;
  })
});
