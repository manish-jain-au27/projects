const express = require("express");
const gasrouter = express.Router();
const authmiddleware = require("../middlewares/auth");

const {
   
    getgas,
    postgas,
    putgas,
    deletegas,
   
  } = require("../controllers/gas");

  gasrouter.use(authmiddleware);

  gasrouter.get("/",getgas);
  gasrouter.post("/addgas",postgas);
  gasrouter.put("/editgas/:gasID",putgas);
  gasrouter.delete("/gaselectric/:gasID",deletegas);
  
  module.exports = gasrouter;
  

