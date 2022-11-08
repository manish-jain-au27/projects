const postmodel  =require("../models/postmodel");
const { post } = require("../router/post");

const writepost = async (req,res)=>{
    const{title,content,createdat,createdby}= req.body;
    try {
        const output  =await postmodel.create({title,content,createdat,createdby});
        res.status(200).send(output);
    } catch (error) {
        res.status(500).send("Unable to post")
    }
};
const getpost = async (req, res) => {
    try {
      const getpost = await postmodel.find();
      res.status(200).send(getpost)
    } catch (error) {
      res.status(500).send("MSG : Internal Error");
    }
  };

const updatepost = async (req,res)=>{
    const {createdby} = req.params;
    try {
        const updatepost = await postmodel.findByIdAndUpdate(createdby);
        res.status(200).send(updatepost);
    } catch (error) {
        res.status(500).send({MSG:"Unable to post"});
    }
};

const deletepost = async (req,res)=>{
    const {createdby} = req.params;
    const deletedpost= await post.findByIdAndDelete(createdby);
    res.status(200).send({MSG:"post deleted"});
}
module.exports = {
    writepost,
    updatepost,
    deletepost,
    getpost
};