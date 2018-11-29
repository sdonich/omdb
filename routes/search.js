const fs = require('fs');
const path = require('path');
const omdb = require('.././lib/omdb');
const render = require('.././lib/render');
const notFound = require('./not_found');

function search(req, res) {

  fs.readFile(path.resolve('public', 'movie.html'), 'utf-8', (error, temlate) => {
    omdb(req, (error, movie) => {
      if (error) {
        return notFound(res);
      } 

      render(movie, temlate, (html) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      });
    });
  });
}

module.exports = search;

// { Response: 'False', Error: 'Movie not found!' }