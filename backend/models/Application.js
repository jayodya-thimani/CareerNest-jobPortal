const mongoose = require("mongoose");


const applicationSchema = new mongoose.Schema({

studentId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},

jobId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Job",
    required:true
},

jobTitle:String,

company:String,

location:String,


name:String,

email:String,

phone:String,

university:String,

degree:String,

academicYear:String,

skills:String,


coverLetter:String,


cv:String,

coverLetterFile:String,


status:{
    type:String,
    default:"Pending"
},


appliedDate:{
    type:Date,
    default:Date.now
}


});


module.exports =
mongoose.model(
"Application",
applicationSchema
);