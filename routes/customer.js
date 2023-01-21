const express = require("express");
const router = express.Router();
const { validate, Customer } = require("../models/customer");

router.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");
  res.render('index', {customers: customers})
});

module.exports = router;
