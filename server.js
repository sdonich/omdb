const http = require('http');
const home = require('./routes/home');
const public = require('./routes/public');
const search = require('./routes/search');

http.createServer((req, res) => {
  let contentType;
  
  if (req.url.endsWith('.png')) {
    contentType = 'image/png';

  } else if (req.url.endsWith('.jpg')) {
    contentType = 'image/jpeg';

  } else if (req.url.endsWith('.css')) {
    contentType = 'text/css';

  } else {
    contentType = 'text/html';
    
  }

  if (req.url === '/') {
    home(res);

  } else if (req.url.search(/search/) !== -1) {
    search(req, res);

  } else {
    public(contentType, req, res);

  }

}).listen(3000, () => console.log('Server is running'));