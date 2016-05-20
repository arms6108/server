var mongoose=require('mongoose')
    , util=require('util')
    , db=require('./db')
    ,fs=require('fs')
    , EventEmitter=require('events').EventEmitter;
 var uploadSchema=mongoose.Schema({
     name:{type:String},
     image:{type:Buffer},
     contentType:{type:String}
 });
var user=mongoose.model('user',uploadSchema,'user');

function ImageUpload(){
    EventEmitter.call(this);
}
util.inherits(ImageUpload,EventEmitter);

ImageUpload.prototype.saveImage=function(data,callBack){
    console.log(data);
  var data=new user({
      name: data.name,
      image:fs.readFileSync(data.image.path),
      contentType: data.image.mimetype
  });
console.log(data);
    data.save(function(err,result){
            if(err){
                console.log(err);
                callBack(err,null)
            }
            else{
                console.log(result);
                callBack(null,result);

            }
        }

    )
};


module.exports=ImageUpload;