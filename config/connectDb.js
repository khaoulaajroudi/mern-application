const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://f3groupe:123456u@cluster0.oj16z.mongodb.net/contact?retryWrites=true&w=majority"
    );
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
