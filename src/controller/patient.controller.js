const { updatePatientRepo } = require("../repository/patient.repository.js");
const {
  createPatientService,
  getAllPatientService,
  updatePatientService,
} = require("../services/patient.service.js");

exports.createPatientController = async (req, res) => {
  try {
    const patientFormData = req.body;

    const patient = await createPatientService(patientFormData);
    res.status(201).json({
      message: "New patient added",
      data: patient,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
exports.getAllPatientController = async (req, res) => {
  try {
    const patient = await getAllPatientService();
    res.status(201).json({
      message: "patient fetched",
      data: patient,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.updatePatientControll = async (req, res) => {
  try {
    const id = req.params.patientId;
    const patient = await updatePatientService(id, req.body);
    res.status(200).json({
      message: "patient updated successfully !",
      data: patient,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
