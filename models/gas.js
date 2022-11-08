const mongoose = require("mongoose");
const gasSchema = new mongoose.Schema({
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
  colour: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gearbox: {
    type: String,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
});
const gasModel = mongoose.model("gaslist", gasSchema);
module.exports = gasModel;
