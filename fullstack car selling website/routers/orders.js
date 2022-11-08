const express = require("express");
const orderrouter = express.Router();
const authmiddleware = require("../middlewares/auth");

const {
   
    allorders,
    createorderele,
    createordergas,
    getorder,
    deleteorder,
   
  } = require("../controllers/order");

  orderrouter.get("/order",allorders);
  orderrouter.post("/createorderele",createorderele);
  orderrouter.post("/createordergas",createordergas);
  orderrouter.get('/:orderID',getorder);
  orderrouter.delete("/:orderID",deleteorder);
  
  module.exports = orderrouter;
  

