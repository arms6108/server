var express = require('express'),
    router = express.Router(),
    BusinessData = require('../model/business'),
    business = new BusinessData(),
    Event = require('events').EventEmitter;

/**
*
* get all business form data
*
*/
router.get('/detail', function(req, res, next) {
    business.all(function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
});
/**
*
* post all business form data and save
*
*/
router.post('/save', function(req, res) {
    var businessData = {
        title: req.body.title,
        url: req.body.url,
        email: req.body.email,
        location: req.body.location
    };

    business.save(businessData, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });


});

module.exports = router;
