const express = require("express");
const router = express.Router();
const { validate, Customer } = require("../models/customer");

router.get('/', async (req, res) => {
  const customers = await Customer.find().sort('name');
  res.render('index' , {customers:customers});
});
router.get('/add',  (req, res) => {
  res.render('add-customer');
});


router.get('/show/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer) return res.status(404).send('The Customer with the given ID was not found.');
  res.render('show-customer' ,  { customer: customer });
});



router.get('/delete/:id', async (req, res) => {
  let customer = await Customer.findByIdAndRemove(req.params.id);
  if (!customer) return res.status(404).send('The Customer with the given ID was not found.');
  res.redirect('/api/customer');
});


router.get('/deleteAll', async (req, res) => {
  let customer = await Customer.remove(req.params);
  if (!customer) return res.status(404).send('The Customer with the given ID was not found.');
  res.redirect('/api/customer');
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);
  let customer = new Customer({
    name: req.body.name,
    mobile: req.body.mobile,
    isGold: req.body.isGold,
  });
  customer = await customer.save()
  res.redirect('/api/customer')
});





module.exports = router;
