const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/admin");

router.post("/", signupcustomer);
router.post("/login", logincustomer);
router.post("/logout", logoutcustomer);

module.exports = router;
