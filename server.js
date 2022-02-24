const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const connectDb = require("./config/connectDb");
const user = require("./models/user");

// midelware
app.use(express.json());
app.use("/contact",require("./routes/contact"))

// connection base données
connectDb();



app.listen(process.env.PORT, (err) => {
    err
      ? console.log(err)
      : console.log("server is running..." + process.env.PORT);
  });