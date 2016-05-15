var express=require('express')
    ,router=express.Router()
    ,categoryList=require('../model/register')
    ,category=new categoryList()
    ,fs=require('fs');
router.get('/category',function(req,res) {
    res.send(category.categoryList());
});
//fs.readFile('app/public/add.svg','utf8',function(err,file){
//    res.send(file);
    //if(err){
    //    s.send(err);
    //}else{
    //    res.writeHead(200,{
    //        'Content-Type': 'image/jpeg',
    //        'Content-Length': file.size
    //    })
    //}

router.get('/category/:id',function(req,res){
    var id=req.params.id;
    res.send(category.categoryById(id));
});

module.exports=router;