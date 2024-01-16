
let express=require('express');

let router=express.Router()

router.get('/add-product',(req,res,next)=>{
    //console.log("in the middlewear");
    res.send('<form action="/admin/users" method="post"><input type="text" name="title"><br><br><input type="tel" name="size"><button type="submit">send</button></form>');
})

router.post('/users',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/shop/')
    
})

module.exports=router;