const mongoose = require("mongoose");
const postschema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    createdat:{
        type:String,
        default: new Date()
    },
    createdby:{
        id:{
            type:mongoose.Schema.Types.ObjectId,ref:"name"
        },
        name:{
            type:String,
            require:true
        }
    }
    
});
const postmodel = mongoose.model("post",postschema);
module.exports = postmodel;