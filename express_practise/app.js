let http = require('http')

let express=require('express');

let bodyparse=require('body-parser');

let app=express();

let adminRoute=require('./routes/admin');

let shopRoute=require('./routes/shop');

app.use(bodyparse.urlencoded({extended:false}))

app.use('/admin',adminRoute);

app.use(shopRoute)

app.use((req,res,next)=>{
    res.status(404      ).send('<h1>Page Not found</h1>')
})





let server=http.createServer(app)



server.listen(8088)