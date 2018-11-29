const http = require('http');
const [home, public, search] = require('./routes/index');

http.createServer((req, res) => {

  if (req.url.match(/\.(html|css|js|png)$/)) {
    public(req, res);

  } else if (req.url === '/') {
    home(res);

  } else if (req.url.startsWith('/search')) {
    search(req, res);

  }
}).listen(3000, () => console.log('Server is running'));