const fs = require('fs');
const path = require('path');
const omdb = require('.././lib/omdb');
const render = require('.././lib/render');
const notFound = require('./not_found');

function search(req, res) {

  fs.readFile(path.resolve('templates', 'movie.html'), 'utf-8', (error, temlate) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      return res.end('We have some trable on our server');
    }

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