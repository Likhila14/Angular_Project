const mongoose = require('mongoose');

const Schemas = mongoose.Schema;

const userSchemas = new Schemas({
    productid:String ,
    Userid: String,
    type: String,
    price: Number,
    Adress: String,
    No: Number,
    email: String,
    phone: Number,

});

module.exports = mongoose.model('bookdata', userSchemas, 'BookingData');