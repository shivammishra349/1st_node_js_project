let http=require('http');

let express=require('express');

let bodyparse=require('body-parser')


const app = express()

app.use(bodyparse.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    //console.log("in the middlewear");
    res.send('<form action="users" method="post"><input type="text" name="title"><br><br><input type="tel" name="size"><button type="submit">send</button></form>');
})

app.use('/users',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
    
})
app.use('/',(req,res,next)=>{
    //console.log("in the second middlewear");
    res.send('<h1>Hello from Express js</h1>')

})

const server=http.createServer(app)

server.listen(8000)