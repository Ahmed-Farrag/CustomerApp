const Joi = require("joi");
const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    mobile: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
  })
);

function validateCustomer(customer) {
  const Schema = Joi.object({
    name: Joi.String().min(3).max(255).require(),
    mobile: Joi.String().min(3).max(15).require(),
    isGold: Joi.Boolean(),
  });
  return Schema.validate(customer);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
