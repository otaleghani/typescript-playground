const fs = require('node:fs');
const fsp = require('node:fs/promises');

const content = "some content di NANDO";

// async version
// fs.writeFile('file.md', content, err => {
//   if (err) {
//     console.error(err)
//     return;
//   } else {
//     fs.readFile('file.md', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log(data)
//     });
//   }
// });

// sync version
// try {
//   fs.writeFileSync('file.md', content);
//   try {
//     data = fs.readFileSync('file.md', 'utf8');
//     console.log(data);
//     console.log("helo");
//   } catch (err) {
//     console.log(err);
//   }
// } catch (err) {
//   console.log(err);
// };

// async function example() {
//   try {
//     await fsp.writeFile('file.md', content);
//     data = await fsp.readFile('file.md', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.log(err)
//   }
// }
// example() 

// You can add flags to your writeFile
// r+ - opens file for reading and writing
// w+ - opens file for reading and writing at the beginning of the file
// a  - opens file for writing, stream at the end
// a+ - opens file for reading and writing, stream at the end

// If you want to append to some file, you can use append

const otherContent = 'Some other content for nando';

fs.appendFile('file.md', otherContent, err => {
  if (err) {
    console.log(err)
  } else {
    fs.readFile('file.md', 'utf8', (data, err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  };
});
