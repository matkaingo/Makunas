const http = require('http');
const port = process.env.PORT || 3000
var http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<body>');
  response.write('<h1>Hello, World!</h1>');
  response.write('</body>');
  response.write('</html>');
  res.end('<h1>Registro</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
});

