const http = require('http');
const server=http.createServer(function (req, res) {
  console.log('Atib')
});
server.listen(4000)