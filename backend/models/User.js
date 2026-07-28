const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        enum:["student","employer","admin"],
        default:"student"
    },
    company:{
        type: String,
        default:""

    },
    isApproved:{
        type:Boolean,
        default:false
    },

    status:{
        type:String,
        enum:["Pending","Approved","Disabled"],
        default:"Pending"
    }

});
 {
    timestamps: true
};

module.exports = mongoose.model("User",userSchema);