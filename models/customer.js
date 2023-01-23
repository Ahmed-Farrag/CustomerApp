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
  const schema = Joi.object(
      {
      name : Joi.string().min(3).max(255).required(),
      mobile: Joi.string().min(3).max(15).required(),
      isGold: Joi.boolean()
     }
 );
 return schema.validate(customer);
}

exports.Customer = Customer;
exports.validate = validateCustomer;

