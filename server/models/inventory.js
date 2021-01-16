var mongoose = require('mongoose');

var Inventory = mongoose.model('kdInventory',{
    Name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true // Removes leading and trailing whitespaces
    },
    Description: {
        type: String,
        required: false,
        minlength: 0,
        trim: true // Removes leading and trailing whitespaces
    },
    Weight: {
        type: String,
        required: false,
        minlength: 0,
        trim: true // Removes leading and trailing whitespaces
    },
    QR_Code: {
        type: String,
        required: false,
        minlength: 0,
        trim: true // Removes leading and trailing whitespaces
    },
    Price: {
        type: Number,
        default: 0
    },
    Quantity: {
        type: Number,
        default: 0
    },
    Location: {
        type: String,
        required: true,
        minlength: 1,
        trim: true // Removes leading and trailing whitespaces
    }
});


module.exports = {Inventory}