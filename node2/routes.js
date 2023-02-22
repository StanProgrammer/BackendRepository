const fs= require('fs');


const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url=='/'){
        res.setHeader('Content-Type','text/html')
        const data=fs.readFileSync('message.txt')
        res.write(`
        <html>
        <head>
        <h1>
        Welcome home
        </h1>
        </head>
        <body>
        ${data}
        <form action="/message" method="POST">
        <input type="text" name="message">
        <button type="submit">
        Send
        </button>
        </form>
        </body>
        </html>
        `)
        return res.end()
      }
      if(url=='/message' && method=== 'POST'){
        const body=[];
        req.on('data',(chunk)=>{
            body.push(chunk)
        })
        req.on('end',()=>{
            const parsedBody= Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1]
            fs.writeFileSync('message.txt',`${message}`)
        })
        
        res.statusCode=302;
        res.setHeader('Location','/')
        return res.end()
      }
      res.setHeader('Content-Type','text/html')
      res.write(`
      <html>
      <head>
        Hello From my Node js Page
      </head>
      </html>`)
      res.end()
}
module.exports={
    handler:requestHandler,
    text:'Hi My Name is Khan'

};

// exports.handler=requestHandler;
// exports.text='Hello'


// module.exports.handler=requestHandler
// module.exports.text='requestHandler'