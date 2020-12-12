const express = require('express');
const routerr = express.Router();
const User = require('../models/admin');
const jwt = require('jsonwebtoken')

routerr.post('/login', (req, res) => {
    let userData = req.body 
    User.findOne({ UserName: userData.UserName}, (err, admin) =>{
        if(err){
            console.log(err)
        }else{
            if(!admin){
                res.status(401).send(userData)
            } else if(admin.Password !== userData.Password) {
                res.status(401).send('Invalid password')
            }else {
                let payload = {subject: admin._id}
                let token = jwt.sign(payload , 'secretkey')
                res.status(200).send({token , admin})
            
               
            }
        }
    })
})

module.exports = routerr ;