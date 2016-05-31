var util=require('util')
    ,EventEmitter=require('events').EventEmitter
    ,fs=require('fs')
    ,mongoose=require('mongoose')
    ,com=require('../helper/common');

    var User = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    otp: {
        type: Number
    },
    image: {
        type: Buffer
    },
    syncTime: {
        type: Date,
        default: Date.now,
        required: true
    },
});

var User = mongoose.model('User', User, 'User');

function user(){
  EventEmitter.call(this);

  util.inherits(user,EventEmitter);

  user.prototype.NewRegister=function(userData,cb){
  	if(com.isMobile(userData.mobile)){
      User.findOne({mobile:userData.mobile},
      	function(err,existingUser){
      		if(existingUser){
      			cb('user already exist',null); 	
      		} else {
      			setTimeout(function(send) {
      			var otp =(Math.floor(Math.random()*80000) + 10000);
      			cb(null,
      				{
      					otp : otp
      				});
      			var data=new user({
      				name:userData.name,
      				monbile:userData.mobile,
      				otp:otp
      			});
      			data.save( function(err,result){
      				if(err){
      					cb(err,null);
                    }
      			})
               },100)
            }
        })
    } else {
    	cb('enter proper mobile no',null);
    }
};
   user.prototype.Verification=function(userData,cb){
   	if(com.isMobile(userData.mobile)){
   		User.findOne({ 
   			mobile:userData.mobile,
   			otp:userData.otp
   		},function(err,existingUser){
   			if(existingUser){
   				User.update({
   				mobile:userData.mobile,
   				otp:userData.otp
   			}, {
   				$set :{
   					otp:0
   				}
   			},function(err,data){
   				if(err){
   					cb(err,null)
   				}
   				else {
   					cb(null,"successfully register");
   				}
   			})
   		} else {
   			cb("no data found",null);
   		}	
   	});
   } else {
     cb("enter proper mobile number or otp", null)
   }
};
 user.prototype.profilePic=function(profile,cb){
  //if(com.isFile(profile.image)){
    User.findOne({
         mobile:profile.mobile
      },function(err,existingUser) {
          if(existingUser){
          User.update({
           image: fs.readFileSync(profile.image.path)
        },function(err){
          if(err){
            cb(err,null);
          }else {
            cb(null,"sucessfully save profile pic");
          }
        })
      } else {
        cb("data not found",null);
      }
    })
  //} else {
      cb("file extenstion is wrong",null);
    //};
  }
};

module.exports=user;