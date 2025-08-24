const express = require("express");
const app = express();
const db = require("./db");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to our Restaurant");
});

const PersonRoutes = require('./routes/PersonRoutes');
const MenuRoutes = require('./routes/MenuRoutes');

app.use('/person',PersonRoutes);
app.use('/menu',MenuRoutes);
app.listen(3000, () => {
  console.log("Server running at PORT 3000");
});
