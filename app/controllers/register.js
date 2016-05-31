
/**
*
* @requires module: /model/register
*
*/
var express = require('express')
    , router = express.Router()
    , categoryList = require('../model/register')
    ,Event = require('events').EventEmitter
    , category = new categoryList()

    , fs = require('fs');

/**
*
* returns all category
*
*/
router.get('/category', function (req, res) {
    res.send(category.categoryList());
});

/**
*
* return category which is specified by id
*
*/
router.get('/category/:id', function (req, res) {
	 var id = req.params.id;
     res.send(category.categoryById(id));
});
category.on('id-passed',function(data){
	console.log('Id passed');
	
});

/**
*
* @exports router
*
*/
module.exports = router;