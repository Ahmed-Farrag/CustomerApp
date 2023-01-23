const express = require('express');
const router = express.Router();
const faker = require('faker');
const { Customer } = require('../models/customer');

router.get('/', (req , res)=>{
    for (let index = 0; index < 50; index++) {
        var customer = new Customer();
         customer.name = faker.name.findName();
         customer.mobile =faker.phone.phoneNumber();
         customer.isGold = faker.random.boolean();
         customer.save((err)=>{
            if(err) throw err;
         });
    }
    res.redirect('/api/customer');
});

module.exports = router;