const express = require('express');
const usermodel = require("../controller/user");
const router = express.Router();
const {
    signupser,
    loginuser,
    logoutuser
}= require("../controller/user");

router.post("/signup",signupser);
router.post("/login",loginuser);
router.post("/logout",logoutuser);

module.exports = router;
