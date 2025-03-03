const Data = require("../models/data");

const saveData = async (req, res) => {
  try {
    const { number, month, year, cvv } = req.body;
    const newData = new Data({ number, month, year, cvv });
    await newData.save();
    res.status(201).json(console.log(newData));
  } catch (e) {
    res.status(500).json(console.log(e));
  }
};

const getData = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json(console.log(e));
  }
};

module.exports = { saveData, getData };
