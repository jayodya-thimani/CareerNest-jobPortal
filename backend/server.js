require("dotenv").config();//Load environment variables from .env

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes=require("./routes/auth");
const app = express();
const adminRoutes = require("./routes/admin");
//const adminStudentRoutes = require("./routes/adminStudents");
//connect to mongodb
connectDB();
console.log("Your Application Server Started Successfully.");
//Middleware
app.use(cors());
app.use(express.json());
//Authentication routes
app.use("/api/auth",authRoutes);
//Test route
app.get("/", (req,res)=>{
    res.send("Backend is running");
    
});

// Admin routes
app.use("/api/admin", adminRoutes);
//app.use("/api/admin/students", adminStudentRoutes);

//server port
const PORT = process.env.PORT || 5000;
//start server
app.listen(PORT,()=>{
    console.log(`🚀 Server running on port ${PORT}`);
});