var express=require('express')
    ,router=express.Router()
    ,user=require('../model/user')
    ,use=new user()
    ,multiparty=require('multiparty');

router.post('/mobile-registration',	function(req,res){
var userData= {
	mobile:req.body.mobile,
	name:req.body.name
    }
   use.NewRegister(userData,function(error,data){
	  if (error) res.send(error)
        else res.send(data)
  })
});

router.post('/mobile-verification',function(req,res){
	var userData= {
	mobile:req.body.mobile,
     otp:req.body.otp
    }
    use.mobile-verification(userData,function(err,data){
    	if(err){
    		res.send(err,null);
    	}
    	else {
    		res.send(null,data);
    	}
    })
});

router.post('/profile-pic',function(req,res){
    var form=new multiparty.Form();
    form.parse(req,function(err,fields,files){
        var profile={
            image:req.image,
            mobile:req.body.mobile
        }
        use.profilePic(profile,function(err,data){
            if(err){
                res.send(err,null);
            }
            else {
                res.send(null,data);
            }
        })
    })

});

module.exports=router;

