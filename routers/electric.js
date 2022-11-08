const express = require("express");
const electricrouter = express.Router();
const authmiddleware = require("../middlewares/auth");
electricrouter.use(authmiddleware);
const {
   
    getelectric,
    postelectric,
    putelectric,
    deleteelectric,
   
  } = require("../controllers/electric");

  electricrouter.get("/",getelectric);
  electricrouter.post("/addElectric",postelectric);
  electricrouter.put("/editelectric/:electricID",putelectric);
  electricrouter.delete("/removeelectric/:electricID",deleteelectric);
  
  module.exports = electricrouter;
  

