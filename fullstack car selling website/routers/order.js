const express = require("express");
const { getOrders, postOrder, deleteOrder } = require("../controllers/order");
const orderRouter = express.Router();
const authmiddleware = require("../middlewares/auth");

orderRouter.use(authmiddleware);

orderRouter.get("/",getOrders);
orderRouter.post("/addOrder",postOrder);
orderRouter.delete("/deleteOrder/:orderID",deleteOrder);
  
  module.exports = orderRouter;
  