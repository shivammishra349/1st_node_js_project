let http=require('http');
let routes=require('./routes')

let server=http.createServer(routes)
server.listen(1000)