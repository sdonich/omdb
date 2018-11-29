const fs = require('fs');
const path = require('path');

function public(req, res) {
  const extension = path.extname(req.url);
  let contentType = '';

  switch (extension) {
    case '.html':
      contentType = 'text/html';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    default:
      contentType = 'text/plain';
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', contentType);
  const filepath = req.url.slice(1);
  const stream = fs.createReadStream(path.resolve('public', filepath));

  stream.on('error', error => {
    if (error.code === 'ENOENT') {
      res.writeHead(404, { 'Content-type': 'text/plain' });
      res.end('Not found');
    } else {
      res.writeHead(500, { 'Content-type': 'text/plain' });
      res.end(error.message);
    }
  });

  stream.pipe(res);
}

module.exports = public;