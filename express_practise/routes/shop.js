let express=require('express');

router=express.Router();

router.get('/',(req,res,next)=>{
    
    res.send('<h1>Hello from express js</h1>')
})


module.exports=router;