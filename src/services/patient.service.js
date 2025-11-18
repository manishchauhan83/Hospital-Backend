const {createPatientRepo,getAllPatientRepo} = require("../repository/patient.repository.js")

exports.createPatientService = async(data)=>{
    try {
        return await createPatientRepo(data)
    } catch (error) {
      throw error;  
    }

}
exports.getAllPatientService = async()=>{
    try {
        return await getAllPatientRepo();
    } catch (error) {
      throw error;  
    }
}