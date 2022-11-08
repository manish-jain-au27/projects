const mongoose = require("mongoose");
const ordermodelSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    electricmodel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'electricModel',
        required:true
    },
    gasmodel:{type:mongoose.Schema.Types.ObjectId,
        ref: 'gasModel',
        required:true
    },
});
const orderModel = mongoose.model("order", ordermodelSchema);
module.exports = orderModel;