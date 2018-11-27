const fs = require('fs');
const path = require('path');
const omdb = require('.././lib/omdb');
const render = require('.././lib/render');


function search(req, res) {
  const stream = fs.createReadStream(path.resolve('public', 'movie.html'));

  omdb(req, (movie) => {
    console.log(movie);
    // render(movie);
  });

  res.writeHead(200, { 'Content-Type': 'text/html' });
  stream.pipe(res);
}

module.exports = search;