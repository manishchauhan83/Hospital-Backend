const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Patient", patientSchema);
