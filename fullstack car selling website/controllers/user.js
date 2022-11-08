const adminModel = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const path = require("path");
let pat = path.join(__dirname, "../");
// const { send } = require("process");

const getloginpage = (req, res) => {
  res.status(200).sendFile(`${pat}public/login.html`);
};

const signupcustomer = async (req, res) => {
  //creating user
  const { email, password } = req.body;
  try {
    const user = await adminModel.create({ email, password });
    res.status(200).sendFile(`${pat}public/login.html`);
  } catch (error) {
    res.status(500).send({ MSG: "Error creating customer" });
  }
};
const logincustomer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await adminModel.findOne({ email, password });
    if (customer) {
      const customerpayload = {
        email,
        role: customer.isAdmin,
        id: customer._id,
      };
      const token = jwt.sign(customerpayload, process.env.SECRET, {
        algorithm: "HS384",
        expiresIn: "1d",
      });
      res.cookie("jwtToken", token, { maxAge: 24 * 60 * 60 * 1000 });
      res.status(200).sendFile(`${pat}public/home.html`);
    } else {
      res.status(401).send({ MSG: "Unauthorised Customer" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ MSG: "Internal server Error" });
  }
};
const logoutcustomer = async (req, res) => {
  res.cookie("jwtToken", "", { maxAge: 2000 });
  res.status(200).send({ MSG: "Logout Successfully" });
};

module.exports = {
  signupcustomer,
  logincustomer,
  logoutcustomer,
  getloginpage,
};
