const http = require('http');
const server=http.createServer(function (req, res) {
  if(req.url=='/home'){
    res.setHeader('Content-Type','text/html')
    res.write(`
    <html>
    <head>
    <h1>
    Welcome home
    </h1>
    </head>
    </html>
    `)
    return res.end()
  }
  else if(req.url=='/about'){
    res.setHeader('Content-Type','text/html')
    res.write(`
    <html>
    <head>
    <h1>
    Welcome to about Us page
    </h1>
    </head>
    </html>
    `)
    return res.end()
  }
  else if(req.url=='/node'){
    res.setHeader('Content-Type','text/html')
    res.write(`
    <html>
    <head>
    <h1>
    Welcome to my Node Js project
    </h1>
    </head>
    </html>
    `)
    return res.end()
  }
});
server.listen(4000)