const express = require('express');
const postrouter = express.Router();
const {
    writepost,
    updatepost,
    deletepost,
    getpost

}= require("../controller/post");

postrouter.post("writepost",writepost);
postrouter.post("updatepost",updatepost);
postrouter.post("deletepost",deletepost);
postrouter.post("getpost",getpost);
module.exports = postrouter;
