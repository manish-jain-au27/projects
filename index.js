const express = require("express");
const cookieparser = require("cookie-parser");
const dotenv = require("dotenv");
const initdb = require("./initdb");
const router = require("./routers/user");
const userrouter = require("./routers/user");
const electricrouter = require("./routers/electric");
const gasrouter = require("./routers/gas");
const orderRouter = require("./routers/order");
dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(express.static("public"));
initdb();

app.use("/",userrouter);
app.use("/electric",electricrouter);
app.use("/gas",gasrouter);
app.use("/orders",orderRouter);


app.listen(8000, () => {
  console.log("Listening on port 8000");
});
