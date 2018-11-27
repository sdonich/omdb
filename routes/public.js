const fs = require('fs');
const path = require('path');

function public(req, res) {
  const filepath = req.url.slice(1);
  const stream = fs.createReadStream(path.resolve('public', filepath));

  stream.pipe(res);
}

module.exports = public;