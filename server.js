const http = require('http');
const home = require('./routes/home');
const public = require('./routes/public');
const search = require('./routes/search');

http.createServer((req, res) => {

  if (req.url === '/') {
    home(res);

  } else if (req.url.endsWith('.png') || req.url.endsWith('.css')) {
    public(req, res);

  } else if (req.url.search(/search/i) !== -1) {
    search(res);

  } else {

  }

}).listen(3000, () => console.log('Server is running'));