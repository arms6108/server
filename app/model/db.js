var mongoose=require('mongoose');

var state  = {
    db:null
}
, url ="mongodb://developer:bridgeit@ds013908.mongolab.com:13908/sp";

exports.connect=function(cb) {
    if(state.db){
        cb();
    }
    else {
        state.db=mongoose.connect(url);
        cb();
    }
}
exports.lib=function(){
    return mongoose;
}
exports.get=function(){
    return state.db
}
exports.close=function(done){
    if(state.db){
        state.db.close(function(err,result){
            state.db=null;
            state.mode=null;
            done(err)
        })
    }
}