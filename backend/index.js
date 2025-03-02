require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const dataRoutes = require("./routes/dataRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use("/api", dataRoutes);

app.get("/test", (req, res) => {
  res.send("test!");
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
