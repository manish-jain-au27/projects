const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phonenumber:{
        type:String,
        require:false
    },
    password:{
        type:String,
        require:true
    }
});
const usermodel = mongoose.model("userlist",userschema);
module.exports = usermodel;