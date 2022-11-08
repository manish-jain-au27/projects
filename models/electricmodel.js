const mongoose = require("mongoose");
const electricmodelSchema = new mongoose.Schema({
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
  range: {
    type: String,
    required: true,
  },
  colours: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const electricModel = mongoose.model("electriclist", electricmodelSchema);
module.exports = electricModel;
