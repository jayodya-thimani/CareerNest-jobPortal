const mongoose = require("mongoose");


const savedJobSchema = new mongoose.Schema({

    studentId:{
        type:String,
        required:true
    },

    jobId:{
        type:Number,
        required:true
    },

    title:String,

    company:String,

    location:String,

    type:String,

    skills:[String],

    deadline:String

});


module.exports = mongoose.model(
    "SavedJob",
    savedJobSchema
);