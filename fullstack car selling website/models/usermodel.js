const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin:{
    type:Boolean,
    default: false
  },
  orderID:{
    type:Schema.Types.ObjectId,
    ref: "orders",
  }
});
const userModel = new mongoose.model("user", userSchema);
module.exports = userModel;
