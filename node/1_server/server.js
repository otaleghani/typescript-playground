//import { createServer } from  'node:http';
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world from node!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

// Node always thinks to be on development mode, so you'll need to export an env var called NODE_ENV and set it to "production" to be able to log less things and cache more things.
