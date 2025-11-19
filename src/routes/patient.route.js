const express = require("express");
const router = express.Router();

const {
  createPatientController,
  getAllPatientController,
  updatePatientControll,
} = require("../controller/patient.controller");

router.post("/create-patien", createPatientController);
router.get("/get-patient", getAllPatientController);
router.put("/update-patient/:patientId", updatePatientControll);
module.exports = router;
