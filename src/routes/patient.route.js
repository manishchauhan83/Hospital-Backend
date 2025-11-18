const express = require("express");
const router = express.Router();

const { createPatientController ,getAllPatientController} = require("../controller/patient.controller");

router.post("/create-patien",createPatientController)
router.get("/get-patient",getAllPatientController)
module.exports=router;