const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to our Restaurant");
});

const PersonRoutes = require('./routes/PersonRoutes');
const MenuRoutes = require('./routes/MenuRoutes');

app.use('/person',PersonRoutes);
app.use('/menu',MenuRoutes);
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log("Server running at PORT 3000");
});
