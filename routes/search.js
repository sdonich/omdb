const fs = require('fs');
const path = require('path');

function search(res) {
  const stream = fs.createReadStream(path.resolve('public', 'movie.html'));
  stream.pipe(res);
}

module.exports = search;