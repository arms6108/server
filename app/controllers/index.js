var express = require('express'),
    router = express.Router();
router.use('/api/register',require('./register'));
router.use('/business',require('./business'));
router.use('/file',require('./fileUpload'));
router.use('/user',require('./user'));

router.get('/',function(req,res){
   res.send('main controller');
});
module.exports=router;