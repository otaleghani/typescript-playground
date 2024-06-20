const fs = require('node:fs');

const content = "some content di NANDO";

fs.writeFile('file.md', content, err => {
  if (err) {
    console.error(err)
    return;
  } else {
    fs.readFile('file.md', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data)
    });
  }
});
