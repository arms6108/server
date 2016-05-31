    var util         =   require('util')
        ,EventEmitter=   require('events').EventEmitter
        ,conn        =   require('../database/userSchema');

    var id=0;
    var categoryData=[
        {
            "id": id++,
            "name": "AUTOMATIVE ",
            "details": [
                "Electronics",
                "SUB-CAT-2",
                "SUB-CAT-3",
                "SUB-CAT-4"
            ]
        },
    {
        "id": id++,
        "name": "REAL ESTATE",
        "details": [
            "Electronics",
            "SUB-CAT-2",
            "SUB-CAT-3",
            "SUB-CAT-4"
        ]
    },
    {
        "id": id++,
        "name": "RETAIL",
        "details": [
            "Electronics",
            "SUB-CAT-2",
            "SUB-CAT-3",
            "SUB-CAT-4"
        ]
    }

];
    /**
    *
    * @constructor
    *
    */
    function Register(){
        EventEmitter.call(this);
    }
    util.inherits(Register,EventEmitter);
   
    /**
    *
    * returns pre-defined categoryData of Register
    * @return {categoryData}
    *
    */
    Register.prototype.categoryList=function(){
        return categoryData;
    };

    /**
    *
    * returns specific categoryData id of Register
    * @param {Number} id - A positive number
    * @this  {self}
    * @return {categoryData[id]} of categoryData 
    *
    */
    Register.prototype.categoryById=function(id){
        var self=this;
        if(typeof id=="undefined"){
            return categoryData;
        }
        for(var i in categoryData ){
            if(categoryData[i].id==id){
                self.emit('id-passed',categoryData[id]);
                return categoryData[id];

            }
        }
    };

    /**
    *
    * @exports Register
    *
    */
 module.exports=Register;
