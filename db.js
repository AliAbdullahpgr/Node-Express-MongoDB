const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/mydb";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
        serverSelectionTimeoutMS : 5000
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Couldn't not connect to MongoDb ",err.message);
  }
};
connectDB();