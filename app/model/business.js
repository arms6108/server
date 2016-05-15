    var mongoose=require('mongoose')
        , util=require('util')
        , db=require('./db')
        , EventEmitter=require('events').EventEmiiter;
        //,conn=require('../database/userSchema');
    var businessSchema=mongoose.Schema({
        id:{type:Number},
        title:{type:String},
        url:{type:String},
        email:{type:String},
        location:{type:String}
    });
    var Business=mongoose.model('Business',businessSchema,'business');
    //constructor
    function BusinessForm(){
        EventEmitter.call(this);
    }
    util.inherits(BusinessForm,EventEmitter);

     //save business signup form

    BusinessForm.prototype.save=function(businessData,cb){
        var self=this,
        data=new Business(businessData);
        data.save(function(err,data){
          if(err){
          return cb(err,null);
          }
            self.emit('form-saved', businessData);
            return cb(null, data);

        })
    }

    module.exports=BusinessForm;
