/**
 * Created with JetBrains WebStorm.
 * User: William
 * Date: 10/04/14
 * Time: 4:50 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PayPalSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: String,
        required: true,
        trim: true
    },
    message: String,
    payFor: String,
    TransactionAt: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

mongoose.model('PayPal', PayPalSchema);


