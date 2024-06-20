const fs = require('node:fs');
const pfs = require('node:fs/promises');

// this is an async function
// fs.stat('./file.md', (err, stats) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("done");
// });

// this is the sync version
// try {
//   const isFile = fs.statSync('./file.md').isFile();
//   const isDir = fs.statSync('./file.md').isDirectory();
//   const isSl = fs.statSync('./file.md').isSymbolicLink();
//   const size = fs.statSync('./file.md').size;
//   console.log(isFile, isDir, isSl, size);
// } catch (err) {
//   console.log(err);
// }

async function example() {
  try {
    const stats = await pfs.stat('./file.md');
    stats.isFile();
    stats.isDirectory();
    stats.isSymbolicLink();
    stats.size;
    console.log(stats)
  } catch (err) {
    console.log(err)
  }
}

example()
