const patient = require("../models/patients.model.js");

exports.createPatientRepo = async (data) => {
  try {
    return await patient.create(data);
  } catch (error) {
    throw error;
  }
};

exports.getAllPatientRepo = async () => {
  try {
    return await patient.find();
  } catch (error) {
    throw error;
  }
};

exports.updatePatientRepo = async (id, data) => {
  try {
    return await patient.findByIdAndUpdate(id, { $set: data });
  } catch (error) {
    throw error;
  }
};
