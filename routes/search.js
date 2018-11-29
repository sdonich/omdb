const fs = require('fs');
const path = require('path');
const omdb = require('.././lib/omdb');
const render = require('.././lib/render');

function search(req, res) {

  fs.readFile(path.resolve('public', 'movie.html'), 'utf-8', (error, temlate) => {
    omdb(req, (movie) => {
      render(movie, temlate, (html) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      });
    });
  });
}

module.exports = search;