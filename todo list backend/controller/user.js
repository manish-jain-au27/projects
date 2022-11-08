const mongoose  =require("mongoose");
const jwt = require("jsonwebtoken");
const usermodel = require("../models/usermodel")
const bcrypt = require("bcrypt");

const signupser = async (req,res)=>{
    const {name,email,password} = req.body;
    const hash=await bcrypt.hash(password,10)
    try {
        const user = await usermodel.create({name,email,password});
        res.status(200).send({MSG:"User created successfully"});
    } catch (error) {
        res.status(500).send({MSG:"Error creating user"});
    }
};
const loginuser = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await usermodel.findOne({email,password});
        if (customer) {
            const match = await bcrypt.compare(password,user.password)
            if (!match){
              res.status(400).send({MSG:"invalid password"})
            }
    
            const userpayload = {
                email,
                id:user._id
            };
            const token = jwt.sign(userpayload,process.env.SECRET,{algorithm:"HS384",expiresIn:"1d"});
            res.cookie("jwttoken",token,{maxAge:30000});
            res.status(200).send("login successfully");
        } else {
            res.status(401).send("Login failed");
        }
    } catch (error) {
        res.status(500).send("error in login");
    }
};
const logoutuser = async(req,res)=>{
    res.cookie("jwttoken","",{maxAge:2000});
    res.status(500).send("Logout Successfully");
};

module.exports = {
    signupser,
    loginuser,
    logoutuser
};