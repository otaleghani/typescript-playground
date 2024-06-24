const http = require('node:http');

const server = http.createServer(async (request, response) => {
  // This function is called for every HTTP request
  // It's an event emitter

  // A simple way to do routing
  if (request.method === 'GET' && request.url === '/echo') {
    const { method, url, headers } = request;
    const userAgent = headers['user-agent'];
    const bodyconst = { method, url, headers, userAgent };
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(bodyconst));
    return
  }
  const { method, url, headers } = request;
  const userAgent = headers['user-agent'];
  console.log(url)
  console.log(method)
  console.log(userAgent)
  let body = [];

  // request is an EventEmitter, so we can use "on" to catch errors, data, and end of file
  request
    .on('error', err => {
      console.error(err)
    })
    .on('data', chunk => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
    });

  // response is an EventEmitter too (cause is type of WritableStream, same as request)
  // response.statusCode = 404;
  // response.setHeader('Content-Type', 'text/html');
  // response.setHeader('X-Powered-By', 'bacon');
  // response.write('<html>')
  // response.write('<body>')
  // response.write('<h1>HEY, NODE</h1>')
  // response.write('</body>')
  // response.write('</html>')
  // response.end('something extra');

  const bodyconst = { method, url, headers, userAgent };
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(bodyconst));
  
  // Basically node streams the content inside of the page
  // So you could do something like this: respond with a preliminary html
  // fetch the data on db and respond with data AFTER by re
  setTimeout(() => {
    response.end(JSON.stringify(bodyconst));
  }, 1000)

}).listen(8080);

// It's the same as doing: 
// const server = http.createServer();
// server.on('request', (request, response) => { // here the handler });
