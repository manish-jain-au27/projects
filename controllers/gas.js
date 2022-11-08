const gasModel = require("../models/gas");

const getgas = async (req, res) => {
  try {
    const gas = await gasModel.find();
    res.status(200).send( gas );
  } catch (error) {
    res.status(500).send({ MSG: "Unable to fetch records" });
  }
};

const postgas = async (req, res) => {
  const gasdata = req.body;
  if (!req.role) {
    try {
      const result = await gasModel.create(gasdata);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ MSG: "Error adding gas car" });
    }
  } else {
    res.status(401).send({ MSG: "Unauthorised Customer" });
  }
};

const putgas = async (req, res) => {
  const { gasID } = req.params;
  const gasdata = req.body;
  if(!req.role){
    try {
      const updatedgasdata = await gasModel.findById(gasID, gasdata, {
        new: true,
        runValidators: true,
      });
      res.status(200).send(updatedgasdata);
    } catch (error) {
      res.status(500).send({ MSG: "Error in updating gas car data" });
    }
  }else {
    res.status(401).send({ MSG: "Unauthorised Customer" });
  }
  
};

const deletegas = async (req, res) => {
  const { gasID } = req.params;
  if(!req.role){
    const deletedgas = await gasModel.findByIdAndDelete(gasID);
  res.status(200).send(deletedgas);
  }else {
    res.status(401).send({ MSG: "Unauthorised Customer" });
  }
};

module.exports = {
  getgas,
  postgas,
  putgas,
  deletegas,
};
