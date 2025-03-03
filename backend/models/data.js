const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{16}$/.test(v);
      },
    },
  },
  month: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(0[1-9]|1[0-2])$/.test(v);
      },
    },
  },
  year: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{2}$/.test(v);
      },
    },
  },
  cvv: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{3}$/.test(v);
      },
    },
  },
});

module.exports = mongoose.model("Data", dataSchema);
