const patient = require("../models/patients.model.js")

exports.createPatientRepo = async (data) => {
  try {
    return await patient.create(data);
  } catch (error) {
    throw error;
  }
};



exports.getAllPatientRepo = async()=>{
    try {
        return await patient.find()
    } catch (error) {
      throw error;  
    }
}