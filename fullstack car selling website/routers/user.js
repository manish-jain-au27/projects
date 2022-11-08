const express = require("express");
const userrouter = express.Router();
const {
  signupcustomer,
  logincustomer,
  logoutcustomer,
  getloginpage,
} = require("../controllers/user");
userrouter.get("/login",getloginpage);
userrouter.post("/signup", signupcustomer);
userrouter.post("/login", logincustomer);
userrouter.post("/logout", logoutcustomer);

module.exports = userrouter;
