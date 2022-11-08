const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    electriCarID:{
        type:Schema.Types.ObjectId,
        ref: "electriclist",
    },
    gasCarID:{
        type:Schema.Types.ObjectId,
        ref: "gaslist",
    },
    userID: {
        type:Schema.Types.ObjectId,
        ref: "user",
    }
});
const orderModel = new mongoose.model("orders", orderSchema);
module.exports = orderModel;
