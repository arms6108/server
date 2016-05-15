var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    id:{type:Number},
    name: {type: String},
    details: [String]

});
var category = mongoose.model('category', categorySchema, 'category');

exports.category=category;

var businessSchema=mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    url:{type:String},
    email:{type:String},
    location:{type:String}
});
var Business=mongoose.model('business',businessSchema,'business');

exports.Business=Business;