const path = require('node:path');

const notes = '/home/oliviero/text.txt';

console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log(path.basename(notes, path.extname(notes)));
console.log(path.extname(notes));

// path.join given x args, gives you the filename
let name = 'oliviero';
console.log(path.join('/home', name, 'text.txt'));

// path.resolve gets you the absolute path
console.log(path.resolve('file.md'));

// path.resolve accepts a series of params
console.log(path.resolve('tmp', 'file.md'));

// path.normalize tries to calculate the actual path when a path contains . or ..
console.log(path.normalize('/home/oliviero/Workspace/../text.txt'));

