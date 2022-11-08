const mongoose = require ("mongoose");
require("dotenv").config();
async function initdb(){
    try {
        await mongoose.connect("mongodb+srv://manish:manish@cluster0.pdkmfzs.mongodb.net/?retryWrites=true&w=majority",{dbName:"todo"});
        console.log("Connected to DB sucessufully");
    } catch (error) {
        console.log("Error in Connecting to DB")
    }
};
module.exports = initdb;