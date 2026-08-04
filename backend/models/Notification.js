const mongoose = require("mongoose");


const notificationSchema = new mongoose.Schema({

    studentEmail:{
        type:String,
        required:true
    },

    title:{
        type:String,
        required:true
    },

    job:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    },

    status:{
        type:String,
        enum:["approved","rejected"],
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    }

});


module.exports =
mongoose.model(
"Notification",
notificationSchema
);