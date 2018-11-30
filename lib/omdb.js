const http = require('http');

function omdb(title, done) {
  const req = http.get(`http://www.omdbapi.com/?t=${title}&apikey=8d11691`, (res) => {
    res.setEncoding('utf-8');

    if (res.statusCode !== 200) {
      done(new Error(`Error: ${res.statusMessage} (${res.statusCode})`));
      res.resume();
      return;
    }
    
    let body = '';
    res.on('data', (chunk) => body += chunk);
    res.on('end', () => {
      let result;
      try {
        result = JSON.parse(body);
      } catch (error) {
        done(error);
      }
      
      if (result.Response === 'False') return done(new Error('Movie not found'));

      done(null, result);
    });
  });

  req.on('error', error => done(error));
}

module.exports = omdb;
