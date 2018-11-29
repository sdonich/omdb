const fs = require('fs');
const path = require('path');

function notFound(res) {

  fs.readFile(path.resolve('public', 'error.html'), 'utf-8', (error, temlate) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(temlate);
  });
}

module.exports = notFound;