const express = require('express')
const router = express.Router()
const { Customer }= require('../models/customer')

router.get('/', async (req, res)=>{
 let name = req.query.search;
 const customer = await Customer.find({name: new RegExp('.*'+name+'.*', 'i')})
 if (!customer)
 return res.status(404).send('The Customer was not found.');
res.render('index', { customers: customer });
})

module.exports = router