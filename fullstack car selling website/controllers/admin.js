const adminModel = require("../models/admin");
const jwt = require("jsonwebtoken");
const path = require("path");
const electricModel = require("../models/electric");
const gasModel = require("../models/gas");
const customerModel = require("../models/customers");
// const { send } = require("process");

const signupcustomer = async (req, res) => {
  //creating user
  const { email, password } = req.body;
  // console.log(req);
  try {
    const user = await adminModel.create({ email, password });
    res.status(200).send({ MSG: "Customer created Successfully" });
  } catch (error) {
    res.status(500).send({ MSG: "Error creating customer" });
  }
};
const logincustomer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await adminModel.findOne({ email, password });
    if (customer) {
      const customerpayload = { email ,role};
      const token = jwt.sign(customerpayload, process.env.SECRET, {
        algorithm: "HS384",
        expiresIn: "1d",
      });
      res.cookie("jwtToken", token, { maxAge: 100000 });
      res.status(200).send({ MSG: "Login Successfully" });
    } else {
      res.status(401).send({ MSG: "Unauthorised Customer" });
    }
  } catch (error) {
    res.status(500).send({ MSG: "Internal server Error" });
  }
};
const logoutcustomer = async (req, res) => {
  res.cookie("jwtToken", "", { maxAge: 2000 });
  res.status(200).send({ MSG: "Logout Successfully" });
};

const getelectric = async (req, res) => {
  try {
    const electric = await electricModel.find();
    res.status(200).send({ MSG: "Electric Data Loaded Successfully" });
  } catch (error) {
    res.status(500).send({ MSG: "Unable to fetch records" });
  }
};

const postelectric = async (req, res) => {
  const electricdata = req.body;
  if(req.role === "admin"){ //do this in all admin access
    try {
        const result = await electricModel.create(electricdata);
        res.status(200).send(result);
      } catch (error) {
        res.status(500).send({ MSG: "Error adding electric car" });
      }
  }else{
    res.status(401).send({ MSG: "Unauthorised Customer" });
  }
};

const putelectric = async (req, res) => {
  const { electricID } = req.params;
  const electricdata = req.body;
  try {
    const updatedelectricdata = await electricModel.findById(
      electricID,
      electricdata,
      { new: true, runValidators: true }
    );
    res.status(200).send(updatedelectricdata);
  } catch (error) {
    res.status(500).send({ MSG: "Error in updating electric car data" });
  }
};

const deleteelectric = async (req, res) => {
  const { electricID } = req.params;
  const deletedelectric = await electricModel.findByIdAndDelete(electricID);
  res.status(200).send(deletedelectric);
};

const getgas = async (req, res) => {
  try {
    const gas = await gasModel.find();
    res.status(200).send({ MSG: "Gas Data Loaded Successfully" });
  } catch (error) {
    res.status(500).send({ MSG: "Unable to fetch records" });
  }
};

const postgas = async (req, res) => {
  const gasdata = req.body;
  try {
    const result = await gasModel.create(gasdata);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ MSG: "Error adding gas car" });
  }
};

const putgas = async (req, res) => {
  const { gasID } = req.params;
  const gasdata = req.body;
  try {
    const updatedgasdata = await gasModel.findById(gasID, gasdata, {
      new: true,
      runValidators: true,
    });
    res.status(200).send(updatedgasdata);
  } catch (error) {
    res.status(500).send({ MSG: "Error in updating gas car data" });
  }
};

const deletegas = async (req, res) => {
  const { gasID } = req.params;
  const deletedgas = await gasModel.findByIdAndDelete(gasID);
  res.status(200).send(deletedgas);
};

module.exports = {
  signupcustomer,
  logincustomer,
  logoutcustomer,
  getelectric,
  postelectric,
  putelectric,
  deleteelectric,
  getgas,
  postgas,
  putgas,
  deletegas,
};
