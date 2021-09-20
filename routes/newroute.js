const express=require('express');

const router=express.Router();

router.get('/:ame',(req,res)=>{
    console.log('the endpoint is',req.params.ame);
    res.send(req.params.ame);
});

module.exports=router;

// Thank you this series is great. One thing i noticed is that you cannot use the current endpoint /:apiName/:path if the specified path contains further slashes. so lets say you want to reach the endpoint microservicehost:microserviceport/api/something/another on a microservice from the gateway with gatewayhost:gatewayport/apiname/api/something/another that will not work as the path variable will only contain /api not api/something/another. One fix i found was just making the endpoint /:apiName/:path(*)?. The (*) means we are using our own regex and that the path variable can contain any character and the ? means the path variable is optional and defaults to just / in case we want to go to the root route of the microservice. Hope this helps for anyone that needs a path parameter with the '/' character in it.