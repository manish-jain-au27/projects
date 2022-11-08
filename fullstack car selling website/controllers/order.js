const orderModel = require("../models/order");

const getOrders = async (req, res) => {
  if(!req.role){
    try {
      const orders = await orderModel.find().populate("electriCarID").populate("gasCarID");
      res.status(200).send(orders);
    } catch (error) {
      res.status(500).send({ MSG: "Unable to fetch records" });
    }
  }else{
    const id = req.id;
    try {
      const orders = await orderModel.find({userID : id});
      res.status(200).send(orders);
    } catch (error) {
      res.status(500).send({ MSG: "Unable to fetch records" });
    }
  }
  
};

const postOrder = async (req, res) => {
  if (req.role || !req.role) {
    const order = req.body;
    order.userID = req.id;
    try {
      const result = await orderModel.create(order);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ MSG: "Error adding electric car" });
    }
  } else {
    res.status(401).send({ MSG: "Unauthorised Customer at post order" });
  }
};

const deleteOrder = async (req, res) => {
  const { orderID } = req.params;
  if (req.role) {
    const deletedOrder = await orderModel.findByIdAndDelete(orderID);
    res.status(200).send(deletedOrder);
  } else {
    res.status(401).send({ MSG: "Unauthorised Customer" });
  }
};

module.exports = {
  getOrders,
  postOrder,
  deleteOrder
}