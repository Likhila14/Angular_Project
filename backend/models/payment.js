const mongoose = require('mongoose');

const Schemas = mongoose.Schema;

const userSchemas = new Schemas({
    productid:String ,
    Userid: String,
    bookid: String,
    mood: String ,
    type: String,
    price: Number,
    code: Number,
    no: Number,
    name: String,
    expire: String,
    cvv: Number,

});

module.exports = mongoose.model('pay', userSchemas, 'PaymentData');