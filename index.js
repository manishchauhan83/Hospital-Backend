const express = require ("express");
const dotenv=require("dotenv");
const app = express();
const connectDB=require("./src/config/database.js");
const patientRoute=require("./src/routes/patient.route.js")

dotenv.config()
app.use(express.json())
connectDB()
app.use("/",patientRoute);
app.listen(5000,()=>{
    console.log("app is running on 5000");
})