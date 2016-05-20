    var mongoose=require('mongoose')
        , util=require('util')
        , db=require('./db')
        , EventEmitter=require('events').EventEmitter;
        //,conn=require('../database/userSchema');
    var businessSchema=mongoose.Schema({
        id:{type:Number},
        title:{type:String},
        url:{type:String},
        email:{type:String},
        location:{type:String}
    });
    var Business=mongoose.model('business',businessSchema,'business');
    //constructor
    function BusinessForm(){
        EventEmitter.call(this);
    }
    util.inherits(BusinessForm,EventEmitter);

     //get all form data
    BusinessForm.prototype.all=function(cb){
     return Business.find({},function (err,data){
         if(err){
             return cb(err,null);
         }
         else {
             return cb(null,data);
         }
     });
    };
    //save business signup form
    BusinessForm.prototype.save=function(businessData,cb){
        var self=this,
        data=new Business(businessData);
            //{id:businessData.id,
            //            title:businessData.title,
            //            url:businessData.url,
            //            email:businessData.email,
            //            location:businessData.location});
        data.save(function(err,data){
          if(err){
          return cb(err,null);
          }
            self.emit('form-saved', businessData);
            return cb(null, data);

        })
    };

    module.exports=BusinessForm;
