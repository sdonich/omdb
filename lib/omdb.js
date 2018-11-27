const http = require('http');
const url = require('url');

function omdb(req, done) {
  const title = url.parse(req.url, true).query.title;

  http.get(`http://www.omdbapi.com/?t=${title}&apikey=8d11691`, (res) => {
    let body = '';

    res.on('data', (chunk) => body += chunk);
    
    res.on('end', () => {
      const json = JSON.parse(body);
      done(json);
    });

  });

}

module.exports = omdb;


// http://www.omdbapi.com/?t=avengers&apikey=8d11691