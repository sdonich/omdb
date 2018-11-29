const fs = require('fs');
const path = require('path');

function home(res) {
  const stream = fs.createReadStream(path.resolve('templates', 'index.html'));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  stream.on('error', (error) => {
    res.writeHead(500, { 'Content-Type': 'text/html' });
    return res.end('Error home.js');
  });
  stream.pipe(res);
}

module.exports = home;