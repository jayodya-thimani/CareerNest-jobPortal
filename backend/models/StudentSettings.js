const mongoose = require("mongoose");


const studentSettingsSchema = new mongoose.Schema({

    studentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },


    notifications:{
        type:Boolean,
        default:true
    },


    emailAlerts:{
        type:Boolean,
        default:true
    },


    theme:{
        type:String,
        default:"Light"
    }

});


module.exports =
mongoose.model(
"StudentSettings",
studentSettingsSchema
);