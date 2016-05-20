
    var util=require('util')
        ,EventEmitter=require('events').EventEmitter
        ,conn=require('../database/userSchema');

  var id=0;
    var categoryData=[
        {
            "id": id++,
            "name": "AUTOMATIVE ",
            "details": [
                "Electronics",
                "sub-cat-2",
                "sub-cat-3"
            ]
        },
    {
        "id": id++,
        "name": "REAL ESTATE",
        "details": [
            "Electronics",
            "sub-cat-2",
            "sub-cat-3"
        ]
    },
    {
        "id": id++,
        "name": "RETAIL",
        "details": [
            "Electronics",
            "sub-cat-2",
            "sub-cat-3"
        ]
    }

];
    //constructor
    function Register(){
        EventEmitter.call(this);
    }
    util.inherits(Register,EventEmitter);
    //get all category list
    Register.prototype.categoryList=function(){
        return categoryData;
    };
    //get category by id
    Register.prototype.categoryById=function(id){
        if(typeof id=="undefined"){
            return categoryData;
        }
        for(var i in categoryData ){
            if(categoryData[i].id==id){
                return categoryData[id];
            }
        }
    };

    module.exports=Register;
