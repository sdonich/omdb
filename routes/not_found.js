const fs = require('fs');
const path = require('path');

function notFound(res) {

  fs.readFile(path.resolve('templates', 'error.html'), 'utf-8', (error, temlate) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      return res.end('We have some trable on our server');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(temlate);
  });
}

module.exports = notFound;