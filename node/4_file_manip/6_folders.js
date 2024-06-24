const fs = require('node:fs');
const path = require('node:path');

const folderPath = './somefolder';

// existsSync -> true/false
// mkdirSync  -> creates folder
try {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
} catch (err) {
  console.error(err);
}

// Returns the paths of the content of a dir
console.log(fs.readdirSync(folderPath));

fs.readdirSync(folderPath).map(file => {
  // import the path from node and join base to filename
  console.log(path.join(folderPath, file))
});

//
const isFile = fileName => {
  return fs.lstatSync(fileName).isFile();
};

fs.readdirSync(folderPath)
  .map(filename => {
    return path.join(folderPath, filename);
  })
  .filter(isFile);

const folderPath2 = './somefolder2'
fs.rename(folderPath, folderPath2, err => {
  if (err) {
    console.log(err);
    return
  }
});

// removes dir
fs.rmdir(folderPath2, { recursive: true, force: true }, err => {
  if (err) {
    throw err;
  }
  console.log("done");
});
