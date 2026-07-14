require("dotenv").config();//Load environment variables from .env

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes=require("./routes/auth");
const app = express();
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

//server port
const PORT = process.env.PORT || 5000;
//start server
app.listen(PORT,()=>{
    console.log(`🚀 Server running on port ${PORT}`);
});