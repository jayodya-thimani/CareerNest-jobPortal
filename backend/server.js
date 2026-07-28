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
app.use("/api/jobs",require("./routes/jobs"));
app.use(
"/api/applications",
require("./routes/applications")
);
const notificationRoutes =
require("./routes/notificationRoutes");


app.use(
"/api/notifications",
notificationRoutes
);
app.use(
"/api/saved-jobs",
require("./routes/savedJobs")
);
app.use(
"/api/students",
require("./routes/students")
);
app.use(
"/api/settings",
require("./routes/settings")
);
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