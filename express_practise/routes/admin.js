let express=require('express');

let route=express.Router();

route.get('/add-user',(req,res,next)=>{
    res.send('<form action="/admin/users" method="POST"><input type="text" name="username"/><button type="submit">Add</button></form>')
})

route.post('/users',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

module.exports=route;