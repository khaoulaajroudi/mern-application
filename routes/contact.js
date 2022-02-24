const express = require("express");
const { model } = require("mongoose");

// initialisation
const contactRouter = express.Router();
// add
// method POST
// path
// body {name,email,phone}
contactRouter.post("/add", async (req, res) => {
  try {
    let newUser = new user({ ...req.body });
    let result = await newUser.save();
    res.send({ result, msg: "sucefuly aded" });
    console.log(result);
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
// find all users
// method GET
// path
contactRouter.get("/all", async (req, res) => {
  try {
    let result = await user.find();
    res.send({ result, msg: " All users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
// findone by id
// method GET
// path
// body {name,email,phone}
contactRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params;
    let result = await user.findOne({ _id: req.params.id });
    res.send({ result, msg: " ONE users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

// update
// method PUT
// path
// body {name,email,phone}
contactRouter.put("/:id", async (req, res) => {
  try {
    let result = await user.findOneAndUpdate({
      _id: req.params.id,
      $set: { ...req.body },
    });
    res.send({ result, msg: " ONE users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});

// delete
// method delete
// path
// body {name,email,phone}
contactRouter.delete("/:id", async (req, res) => {
  try {
    let result = await user.findOneAndRemove({
      _id: req.params.id,
    });
    res.send({ msg: " delete users" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "fail" });
  }
});
module.exports = contactRouter;
