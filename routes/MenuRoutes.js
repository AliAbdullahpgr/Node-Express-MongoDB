const express = require("express");
const router = express.Router();

const MenuItem = require("../models/MenuItem");

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("Data Fetched");
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json(e, ": Internal Server Error");
  }
});
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const Menu = new MenuItem(data);
    const response = await Menu.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).json(e, ": Internal Server Error");
  }
});
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (
      tasteType === "sweet" ||
      tasteType === "sour" ||
      tasteType === "spicy"
    ) {
      const data = await MenuItem.find({ taste: tasteType });
      console.log("Data fetched");
      res.status(200).json(data);
    } else {
      console.log("Invalid taste type");
      res.status(404).json("Taste Type Invalid");
    }
  } catch (e) {
    console.log(e);
    res.status(500).json(e, ": Internal Server Error");
  }
});

module.exports = router;
