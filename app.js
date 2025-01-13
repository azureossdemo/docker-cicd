// app.js

const http = require('http');

const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
