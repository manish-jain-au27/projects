const mongoose = require("mongoose");
const electricSchema = new mongoose.Schema({
  imagepath: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  topspeed: {
    type: Number,
    required: true,
  },
  rangedesc: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const electricModel = mongoose.model("electriclist", electricSchema);
module.exports = electricModel;
