const fs = require('fs');
const path = require('path');

function home(res) {
  const stream = fs.createReadStream(path.resolve('public', 'index.html'));
  
  stream.pipe(res);
}

module.exports = home;