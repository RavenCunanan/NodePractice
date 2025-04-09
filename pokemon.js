const http = require('http');

const server = http.createServer((request, response) => {
  let statusCode = 200;
  let contentType = 'text/html; charset=utf-8';
  let content = '';

  if (request.url === '/pikachu') {
    console.log('Pika Pika!');
    content = '<h1>⚡️ Pikachu</h1><img src="https://i.imgur.com/k5cfniM.png" alt="Pikachu">';
  } else if (request.url === '/sylveon') {
    console.log('Sylv Sylv!');
    content = '<h1>🎀 Sylveon</h1><img src="https://i.imgur.com/rKGgVEm.png" alt="Sylveon">';
  } else {
    statusCode = 404;
    content = '<h1>404 Not Found</h1><p>This Pokémon is currently resting!</p>';
  }

  response.writeHead(statusCode, { 'Content-Type': contentType });
  response.end(content);
});

server.listen(3000, () => {
  console.log('Pokémon Center is open! Visit http://localhost:3000');
});
