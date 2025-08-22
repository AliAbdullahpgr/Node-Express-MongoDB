const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());
const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem");

app.get("/", (req, res) => {
  res.send("Welcome to our Restaurant");
});
app.post("/person", async (req, res) => {
  try 
  {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } 
  catch(error) 
  {
    console.log(error, " Internal Server error");
    res.status(500).json(error, " Internal Server Error");
  }
});
app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error, " Internal Server error");
    res.status(500).json(error, " Internal Server Error");
  }
});
app.listen(3000, () => {
  console.log("Server running at PORT 3000");
});
