const mongoose = require("mongoose");
const gasmodelSchema = new mongoose.Schema({
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
  gear: {
    type: String,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
});
const gasModel = mongoose.model("gaslist", gasmodelSchema);
module.exports = gasModel;
