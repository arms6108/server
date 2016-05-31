    /**
    *
    * 
    *
    */

    var mongoose  =  require('mongoose')
        , util    =  require('util')
        , db      =  require('./db')
        ,comm     =  require('../helper/common')
        ,EventEmitter=require('events').EventEmitter;
    
    var businessSchema=mongoose.Schema({
        id:{type:Number},
        title:{type:String},
        url:{type:String},
        email:{type:String},
        location:{type:String}
    });
    var Business=mongoose.model('business',businessSchema,'business');
    
    /**
    *
    * @constructor
    *
    */
    function BusinessForm(){
        EventEmitter.call(this);
    }
    util.inherits(BusinessForm,EventEmitter);

    /**
    *
    * Returns all records of business form of BusinessForm
    * This callback type is called 'requestCallback' and displayed as a global symbol.
    * @callback requestCallback
    * @param {number} responseCode
    * @param {string} responseMessage
    * @param {requestCallback} cb - The callback that handle response.
    * @return {data} 
    *
    */
    BusinessForm.prototype.all=function(cb){
      Business.find({},function (err,data){
        if(err){
          return cb(err,null);
        }
        else {
          return cb(null,data);
        }
      
     });
    };

    /**
    *
    * save businessData to database
    * This callback type is called 'requestCallback' and displayed as a global symbol.
    * @callback requestCallback
    * @param {number} responseCode
    * @param {string} responseMessage
    * @param {requestCallback} cb - The callback that handle response
    * @param {String} buisnessData
    * @return {data} save data 
    *
    */
    //save business signup form
    BusinessForm.prototype.save=function(businessData,cb){
        if(comm.isUrl(businessData.url) && comm.isEmail(businessData.email)){
                    var self=this,
            data=new Business(businessData);

                //{id:businessData.id,
                //            title:businessData.title,
                //            url:businessData.url,
                //            email:businessData.email,
                //            location:businessData.location});
            self.on('businessdata-saved',function(businessData){
                //console.log(businessData);
                data.save(function(err,data){
                  if(err){
                  return cb(err,null);
                  }
                  console.log(data)
                    //self.emit('businessdata-saved', businessData);
                    return cb(null, data);
                    
                })
            });
            self.emit('businessdata-saved',businessData);
        } else {
            cb("enter proper url and email address", null)
        }
    };

    /**
    *
    * @export BusinessForm
    *
    */
    module.exports=BusinessForm;
