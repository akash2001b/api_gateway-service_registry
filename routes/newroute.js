const express=require('express');

const router=express.Router();

router.get('/:ame',(req,res)=>{
    console.log('the endpoint is',req.params.ame);
    res.send(req.params.ame);
});

module.exports=router;