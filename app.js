var http = require('http');

// Create a server object
http.createServer(function (request, response) {
  response.write('Hello World!'); 
  response.end(); 
}).listen(8080);
