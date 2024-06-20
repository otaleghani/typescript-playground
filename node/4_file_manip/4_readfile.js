const fs = require('node:fs')
const fsp = require('node:fs/promises')

fs.readFile('file.md', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

try {
  const data = fs.readFileSync('file.md', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

async function example() {
  try {
    const data = await fsp.readFile('file.md', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
example()
