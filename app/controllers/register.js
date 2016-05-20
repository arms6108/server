var express = require('express')
    , router = express.Router()
    , categoryList = require('../model/register')
    , category = new categoryList()
    , fs = require('fs');
//get category list
router.get('/category', function (req, res) {
    res.send(category.categoryList());
});
// get category by id
router.get('/category/:id', function (req, res) {
    var id = req.params.id;
    res.send(category.categoryById(id));
});
module.exports = router;