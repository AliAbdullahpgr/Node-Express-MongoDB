const mongoose = require("mongoose");

// const mongoUrl = "mongodb://localhost:27017/mydb";
const mongoUrl = 'mongodb+srv://aliabdullah:X6cdDoYvj1QxJyK1@cluster0.u8fwhgq.mongodb.net/'
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