var express=require('express')
   ,router=express.Router()
   ,BusinessData=require('../model/business')
   ,business =new BusinessData()
    ,Event = require('events').EventEmitter;


router.post('/save',function(req,res){
    var businessData= {
        title:req.body.title,
        url:req.body.url,
        email:req.body.email,
        location:req.body.location
    }
    business.save(businessData,function(err,res){
        if(err){
            res.send(err);
        }
        else{
            res.send(res);
        }
    });

});

module.exports=router;
