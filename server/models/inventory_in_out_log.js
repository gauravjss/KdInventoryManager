    let mongoose = require('mongoose');

    let InventoryLog = mongoose.model('kdInventoryLog',{
        Name: {
            type: String,
            required: true,
            minlength: 1,
            trim: true // Removes leading and trailing whitespaces
        },
        Action: {
            type: String,
            required: false,
            minlength: 0,
            trim: true // Removes leading and trailing whitespaces
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
        },
        CompletedAt: {
            type: Number,
            default: null
        }
    });


    module.exports = {InventoryLog}