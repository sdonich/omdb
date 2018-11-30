const omdb = require('.././lib/omdb');
const render = require('.././lib/render');
const url = require('url');

function search(req, res) {
  const title = url.parse(req.url, true).query.title;

  omdb(title, (error, movie) => {
    if (error) {
      return render('error.html', { error: error.message }, (error, html) => {
        if (error) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          return res.end(error.message);
        }
  
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
      });
    }

    render('movie.html', movie, (error, html) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end(error.message);
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
    });
  });
}

module.exports = search;