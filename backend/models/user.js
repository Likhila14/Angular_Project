const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    UserName: { 
        type: String,
       
    } ,
    FirstName: { 
        type: String,
       
    } ,
    LastName: String,
    Password: { 
        type: String,
       
    } ,
    email:  { 
        type: String,
       
    } ,
    phone:  { 
        type: String,
      
    } ,

});


module.exports = mongoose.model('user', userSchema, 'UserData');