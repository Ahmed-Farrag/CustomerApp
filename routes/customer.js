const express = require("express");
const router = express.Router();
const { validate, Customer } = require("../models/customer");

router.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");
  res.render("index", { customers: customers });
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (!customer)
    return res.status(404).send("the customer with the given id was not found");
  res.render("show-customer", { customer: customer });
});

router.get("/delete/:id", async (req, res) => {
  let customer = await Customer.findByIdAndRemove(req.params.id);
  if (!customer)
    return res.status(404).send("the customer with the given id was not found");
  res.redirect("/api/customer");
});

module.exports = router;
