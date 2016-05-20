var express=require('express')
    ,router=express.Router()
    ,ImageUpload=require('../model/fileUpload')
    ,upload=new ImageUpload()
    ,multer = require('multer')
    ,fs=require('fs')
    ,storage=multer.diskStorage(filename=function(req,file,callback){
          callback(null,file.originalname + '-' +Date.now());

    });
//for storing image locally use storage function
//multer({storage:storage})

router.post('/uploads',multer({storage:storage}).single('file'), function(req,res){
  //console.log(req.body);
  //  console.log(req.file);
    var file={
        name:req.body.name,
        image:req.file
    }
    //console.log(file);
   upload.saveImage(file,function(err,result){
       if(err){
           res.send(err);
       }
       else{
           res.send(result);
       }
   })
});
module.exports=router;
