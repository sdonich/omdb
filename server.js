const http = require('http');
const render = require('./lib/render');
const {home, public, search, notFound} = require('./routes/index');

http.ServerResponse.prototype.render = render;

http.createServer((req, res) => {
  if (req.url.match(/\.(html|css|js|png)$/)) {
    public(req, res);
  } else if (req.url === '/') {
    home(res);
  } else if (req.url.startsWith('/search')) {
    search(req, res);
  } else {
    notFound(res);
  }
}).listen(3000, () => console.log('Server is running'));