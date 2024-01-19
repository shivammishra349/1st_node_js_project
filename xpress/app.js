let http=require('http');

let express=require('express');

let app=express();

let adminRoute=require('./routes/admin');

let shopRoute=require('./routes/shop');

let bodyparse=require('body-parser')

app.use(bodyparse.urlencoded())

app.use('/admin',adminRoute);

app.use(shopRoute)

let server=http.createServer(app);

server.listen(1000)