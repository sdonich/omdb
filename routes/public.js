const fs = require('fs');
const path = require('path');

function public(contentType, req, res) {
  const filepath = req.url.slice(1);

  fs.readFile(path.resolve('public', filepath), (error, html) => {
    if (error) {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(html);
    }
  });
}

module.exports = public;