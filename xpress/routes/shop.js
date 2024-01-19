let express=require('express');

let router=express.Router();

router.use('/',(req,res,next)=>{
    res.send("welcom to practice mode")
})


module.exports=router;