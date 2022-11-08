const electricModel = require("../models/electric");

const getelectric = async (req, res) => {
  try {
    const electric = await electricModel.find();
    res.status(200).send( electric );
  } catch (error) {
    res.status(500).send({ MSG: "Unable to fetch records" });
  }
};

const postelectric = async (req, res) => {
  if (!req.role) {
    const electricdata = req.body;
    try {
      const result = await electricModel.create(electricdata);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ MSG: "Error adding electric car" });
    }
  } else {
    res.status(401).send({ MSG: "Unauthorised Customer" });
  }
};

const putelectric = async (req, res) => {
  const { electricID } = req.params;
  const electricdata = req.body;
  if (!req.role) {
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
  } else {
    res.status(401).send({ MSG: "Unauthorised Customer" });
  }
};

const deleteelectric = async (req, res) => {
  const { electricID } = req.params;
  if (!req.role) {
    const deletedelectric = await electricModel.findByIdAndDelete(electricID);
    res.status(200).send(deletedelectric);
  } else {
    res.status(401).send({ MSG: "Unauthorised Customer" });
  }
};

module.exports = {
  deleteelectric,
  putelectric,
  postelectric,
  getelectric,
};
