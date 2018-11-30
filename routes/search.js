const omdb = require('.././lib/omdb');
const url = require('url');

function search(req, res) {
  const title = url.parse(req.url, true).query.title;

  omdb(title, (error, movie) => {
    if (error) {
      return res.render('error.html', { error: error.message });
    }

    res.render('movie.html', movie);
  });
}

module.exports = search;