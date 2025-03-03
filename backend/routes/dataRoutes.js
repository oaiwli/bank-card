const express = require("express");
const { saveData, getData } = require("../controllers/dataController");
const router = express.Router();

router.post("/data", saveData);
router.get("/data", getData);

module.exports = router;
