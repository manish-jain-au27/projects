const jwt = require("jsonwebtoken");
const authmiddleware = (req, res, next) => {
  const token = req.cookies.jwtToken;
  if (token) {
    try {
      const customerdata = jwt.verify(token, process.env.SECRET);
      req.role = customerdata.role;
      req.id = customerdata.id;
      next();
    } catch (error) {
      res.status(401).send({ MSG: "Invalid Customer" });
    }
  } else {
    res.status(401).send({ MSG: "Invalid Customer" });
  }
};
module.exports = authmiddleware;
