const mongoose = require('mongoose');

const express = require('express');
const routersss = express.Router();

const pay  = require('../models/payment');

routersss.get('/details' , (req, res) => {
    pay.find((err, doc) => {
        if(!err){res.send(doc);}
        else { console.log('Error in retrieving data :' + Json .stringify(err,undefined,2))}
    });
});

routersss.post('/paydata',(req, res) =>{
    let payData = req.body
    let paydata = new pay(payData)
    paydata.save((err,booked)=>{
        if(err){
            console.log(err)
        }else {
            res.status(200).send(booked)
        }
    })
 })

 module.exports = routersss ;