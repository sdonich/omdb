const fs = require('fs');
const path = require('path');

function home(res) {
  const stream = fs.createReadStream(path.resolve('public', 'index.html'));
  res.writeHead(200, { 'Content-Type': 'text/html' });
  stream.pipe(res);
}

module.exports = home;