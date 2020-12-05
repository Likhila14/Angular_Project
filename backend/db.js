const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Likhila:Likhila14*@mycluster.liwaz.mongodb.net/SDP?retryWrites=true&w=majority',(err) => {
    if(!err)
     console.log('MongoDB connection succeeded.');
    else
    console.log('Error in DB connection :' + Json .stringify(err,undefined,2));
});
module.exports = mongoose 