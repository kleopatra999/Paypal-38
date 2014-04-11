'use strict';

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'),
    PayPal = require('../db'),
    paypal = mongoose.model('PayPal');

router.index = function(req, res) {
    paypal.find().
        sort('-TransactionAt').
        exec( function ( err, data ){
            res.send(data);
        });
};

router.list = function(req, res) {
    return paypal.find(
        {},
        null,
        {
            sort: {
                TransactionAt: -1
            }
        },
        function(err, data) {
            if (!err) {
                console.log(data);
                return res.json(data);
            } else {
                return res.send(err);
            }
        }
    );
};

//http://localhost:3000/paypal/get/53475c4ede8c2c180d2dc440
router.getOne = function(req, res) {
    paypal.findById( req.params.id, function ( err, pp ){
        if(err) {
            console.log(err);
            return res.send(err);
        }
        console.log(pp);
        res.json(pp);
    });
};

router.create = function(req, res) {
    var pp = new  paypal({
        name : req.body.name,
        email : req.body.email,
        amount : req.body.amount,
        message : req.body.message,
        payFor : req.body.payFor,
        TransactionAt: req.body.TransactionAt ? req.body.TransactionAt : Date.now(),
        updated : Date.now()
    });
    pp.save(function(err) {
        if(err) console.log(err);
        res.json(pp);
    });
};

router.update = function(req, res) {
    paypal.findById( req.params.id, function ( err, pp ){
        pp.name = req.body.name;
        pp.email = req.body.email;
        pp.amount = req.body.amount;
        pp.message = req.body.message;
        pp.payFor = req.body.payFor;
        pp.TransactionAt = req.body.TransactionAt ? req.body.TransactionAt : Date.now();
        pp.updated = Date.now();

        pp.save( function ( err, pp, count ){
            if(err) {
                console.log(err);
                res.send(err);
            }
            res.json(pp);
        });
    });
};

router.delete = function(req, res) {
    paypal.findById( req.params.id, function ( err, pp ){
        pp.remove( function ( err, data ){
            if(err) console.log(err);
            res.json('delete ['+req.params.id + '] successfully.');
        });
    });
};

module.exports = router;