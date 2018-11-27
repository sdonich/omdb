const fs = require('fs');
const path = require('path');

function search(res) {
  const stream = fs.createReadStream(path.resolve('public', 'movie.html'));
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  stream.pipe(res);
}

module.exports = search;