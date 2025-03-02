const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{16}$/.test(v); // 16 цифр
      },
      message: (props) =>
        `${props.value} не является допустимым номером карты. Должно быть 16 цифр.`,
    },
  },
  month: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(0[1-9]|1[0-2])$/.test(v); // 2 цифры для месяца от 01 до 12
      },
      message: (props) =>
        `${props.value} не является допустимым месяцем. Должно быть 2 цифры от 01 до 12.`,
    },
  },
  year: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{2}$/.test(v); // 2 цифры для года
      },
      message: (props) =>
        `${props.value} не является допустимым годом. Должно быть 2 цифры.`,
    },
  },
  cvv: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{3}$/.test(v); // 3 цифры для CVV
      },
      message: (props) =>
        `${props.value} не является допустимым CVV. Должно быть 3 цифры.`,
    },
  },
});

module.exports = mongoose.model("Data", dataSchema);
