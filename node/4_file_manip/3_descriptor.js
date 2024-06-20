const fs = require('node:fs');
const fsp = require('node:fs/promises')

// 'r'  reading
// 'r+' reading and writing
// 'w+' reading, writing, creates it if not existant, stream at the begin
// 'a'  writing, stream at the end
// 'a+' reading, writing, stream at the end
fs.open('file.md', 'r', (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(fd);
});

// sync vertion
try {
  const fd = fs.openSync('file.md', 'r');
  console.log(fd)
  // fs.close closes the file
  fs.close(fd)
} catch (err) {
  console.log(err);
}

// promise version
async function example() {
  let filehandle;
  try {
    filehandle = await fsp.open('file.md', 'r');
    console.log(filehandle.fd);
    // .readFile reads file with given encoding
    console.log(await filehandle.readFile({ encoding: 'utf8' }));
  } finally {
    if (filehandle) await filehandle.close()
  }
}
example()
