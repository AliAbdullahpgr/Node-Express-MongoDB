const express = require('express');
const router = express.Router();
const Person = require('../models/Person')
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Fetched");
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});
router.post("/", async (req, res) => {
  try {
    const person = new Person(req.body);
    const response = await person.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (e) {
    console.error(e);
    res.status(500).json(e);
  }
});
router.get('/:worktype',async (req, res)=>{
  try{
    let worktype = req.params.worktype;
    worktype = worktype[0].toUpperCase()+ worktype.slice(1);
    if(worktype === 'Chef'|| worktype === 'Owner' || worktype === 'Waiter'){
      const data = await Person.find({work:worktype});
      console.log("data fetched");
      res.status(200).json(data);
    }else{
      res.status(404).json(" worktype not found");
    }
  }catch(e){
    console.error(e);
    res.status(500).json(e.message,": Internal Server Error");
  }
})

module.exports = router;