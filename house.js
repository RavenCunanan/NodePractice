const http = require('http');

const server = http.createServer((request, response) => {
  // Set a default status and headers (200 OK, HTML with UTF-8)
  let statusCode = 200;
  let contentType = 'text/html; charset=utf-8';
  let content = '';

  if (request.url === '/') {
    content = '<h1>:house_with_garden: Welcome to My Dream Home</h1><p>A cozy brownstone with a beautiful garden.</p>';
  } else if (request.url === '/living-room') {
    content = '<h1>:couch_and_lamp: Living Room</h1><p>A comfy couch, lots of books, and tons of plants.</p>';
  } else if (request.url === '/kitchen') {
    content = '<h1>:fried_egg: Kitchen</h1><p>Lots of counter space, and fully stocked with snacks.</p>';
  } else if (request.url === '/bedroom') {
    content = '<h1>:bed: Bedroom</h1><p>A king-size bed with soft pillows and light streaming in.</p>';
  } else {
    // For anything not matched, override with 404 and a message
    statusCode = 404;
    content = "<h1>404 Not Found</h1><p>This room doesn't exist!</p>";
  }

  response.writeHead(statusCode, { 'Content-Type': contentType });
  response.end(content);
});

server.listen(3000, () => {
  console.log('Dream Home is ready! Visit http://localhost:3000');
});
