const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
});
const adminModel = new mongoose.model("admin", adminSchema);
module.exports = adminModel;
