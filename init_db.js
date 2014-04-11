'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/paypal');

var PayPal = require('./db');
var paypal = mongoose.model('PayPal');

//mock-data
var m = new paypal({
    name: 'John Smith',
    email : 'JohnSmith@paypal.com',
    amount : '$123.45',
    message : 'I am sending money to family or friend',
    payFor :  '1',
    TransactionAt: '12/5/2013',
    updated : Date.now()
});
m.save(function(err, m) {
    if(err) console.log(err);
    console.log(m);
});

//2
var m = new paypal({
    name: 'Starbucks',
    email : 'Starbucks@paypal.com',
    amount : '$3.34',
    message : 'I am sending money to family or friend',
    payFor :  '1',
    TransactionAt: '11/22/2013',
    updated : Date.now()
});
m.save(function(err, m) {
    if(err) console.log(err);
    console.log(m);
});

//3.
var m = new paypal({
    name: 'Jane Jones',
    email : 'JaneJones@paypal.com',
    amount : '$123.45',
    message : 'I am sending money to family or friend',
    payFor :  '1',
    TransactionAt: '12/5/2013',
    updated : Date.now()
});
m.save(function(err, m) {
    if(err) console.log(err);
    console.log(m);
});

//4.
var m = new paypal({
    name: "Applebee's",
    email : 'Applebees@paypal.com',
    amount : '$35.42',
    message : 'I am sending money to family or friend',
    payFor :  '0',
    TransactionAt: '11/6/2013',
    updated : Date.now()
});
m.save(function(err, m) {
    if(err) console.log(err);
    console.log(m);
});

//5.
var m = new paypal({
    name: 'Toys R Us',
    email : 'ToysRUs@paypal.com',
    amount : '$1,239.34',
    message : 'I am sending money to family or friend',
    payFor :  '1',
    TransactionAt: '10/24/2013',
    updated : Date.now()
});
m.save(function(err, m) {
    if(err) console.log(err);
    console.log(m);
});

//6.
var m = new paypal({
    name: 'Apple',
    email : 'JohnSmith@paypal.com',
    amount : '$199.00',
    message : 'I am sending money to family or friend',
    payFor :  '1',
    TransactionAt: '9/3/2013' ,
    updated : Date.now()
});
m.save(function(err, m) {
    if(err) console.log(err);
    console.log(m);
});

//7.
var m = new paypal({
    name: 'Ebay',
    email : 'Ebay@paypal.com',
    amount : '$222.50',
    message : 'I am sending money to family or friend',
    payFor :  '1',
    TransactionAt: '7/5/2013',
    updated : Date.now()
});
m.save(function(err, m) {
    if(err) console.log(err);
    console.log(m);
});

//8.
var m = new paypal({
    name: 'Microsoft Corp',
    email : 'Microsoft@paypal.com',
    amount : '$99.00',
    message : 'I am sending money to family or friend',
    payFor :  '1',
    TransactionAt: '11/7/2012',
    updated : Date.now()
});
m.save(function(err, m) {
    if(err) console.log(err);
    console.log(m);
});

//9.10/5/2012	Jamba Juice		$1.00
var m = new paypal({
    name: 'Jamba Juice',
    email : 'JohnSmith@paypal.com',
    amount : '$1.00',
    message : 'I am sending money to family or friend',
    payFor :  '1',
    TransactionAt: '10/5/2012',
    updated : Date.now()
});
m.save(function(err, m) {
    if(err) console.log(err);
    console.log(m);
});

//10.9/1/2012	What is it?		$123.45
var m = new paypal({
    name: 'WhatCome',
    email : 'Whatcome@paypal.com',
    amount : '$876.25',
    message : 'I am sending money to family or friend',
    payFor :  '1',
    TransactionAt: '9/1/2012',
    updated : Date.now()
});
m.save(function(err, m) {
    if(err) console.log(err);
    console.log(m);
});

//mongoose.disconnect();

