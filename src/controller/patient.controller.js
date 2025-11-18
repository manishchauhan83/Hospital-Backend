const {createPatientService,getAllPatientService}=require("../services/patient.service.js")


exports.createPatientController=async(req, res)=>{
    try {
       const patientFormData= req.body;

        const patient=await createPatientService(patientFormData)
        res.status(201).json({
            message:"New patient added",
            data:patient
        })
    } catch (error) {
       res.status(500).json(error.message);
    }
}
exports.getAllPatientController=async(req,res)=>{
    try {
        const patient=await getAllPatientService ()
        res.status(201).json({
            message:"patient fetched",
            data:patient
        })
    } catch (error){ 
       res.status(500).json(error.message); 
    }
    
}