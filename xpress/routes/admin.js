let express=require('express');

let route=express.Router();

route.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/products" method="post"><input type="text" name="username"><button type="submit">login</button></form>')
})

route.post('/products',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})


module.exports=route