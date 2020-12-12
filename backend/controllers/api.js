const express = require('express');
const routers = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken')


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }
//To Post Signin Data
routers.post('/register',(req, res) =>{
   let userData = req.body
   let user = new User(userData)
   user.save((err,registered)=>{
       if(err){
           console.log(err);
       }else {
           let payload = { subject: registered._id}
           let token = jwt.sign(payload, 'secretkey')
           res.status(200).send({token, registered});
       }
   })
})




//to Login
routers.post('/login', (req, res) => {
    let userData = req.body 
    User.findOne({ UserName: userData.UserName}, (err, user) =>{
        if(err){
            console.log(err)
        }else{
            if(!user){
                res.status(401).send(userData)
            } else if(user.Password !== userData.Password) {
                res.status(401).send('Invalid password')
            }else {
                let payload = {subject: user._id}
                let token = jwt.sign(payload , 'secretkey')
                res.status(200).send({token , user})
            
               
            }
        }
    })
})


//To UPDATE THE PROFILE

routers.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {  
        UserName: res.body.UserName,
    FirstName: res.body.FirstName,
    LastName: res.body.LastName,
    Password: res.body.Password,
    email: res.body.email,
    phone: res.body.email,

    };
    User.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); 
            console.log(res.body.Password)
        }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});





module.exports = routers ;