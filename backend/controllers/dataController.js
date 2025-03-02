const Data = require("../models/data");

const saveData = async (req, res) => {
  try {
    const { number, month, year, cvv } = req.body;
    const newData = new Data({ number, month, year, cvv });
    await newData.save();
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
};

const getData = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
};

module.exports = { saveData, getData };
