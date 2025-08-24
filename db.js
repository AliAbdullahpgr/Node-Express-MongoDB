const mongoose = require("mongoose");
require('dotenv').config();

// const mongoUrl = process.env.DB_URL_LOCAL;
const mongoUrl = process.env.DB_URL;
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