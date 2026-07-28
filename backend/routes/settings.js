const express = require("express");

const router = express.Router();

const StudentSettings =
require("../models/StudentSettings");



// GET SETTINGS

router.get("/:studentId", async(req,res)=>{


try{


let settings =
await StudentSettings.findOne({

studentId:req.params.studentId

});



if(!settings){


settings =
await StudentSettings.create({

studentId:req.params.studentId

});


}



res.json(settings);



}catch(error){


res.status(500).json({

message:error.message

});


}


});





// UPDATE SETTINGS


router.put("/:studentId", async(req,res)=>{


try{


const updatedSettings =
await StudentSettings.findOneAndUpdate(


{
studentId:req.params.studentId
},


req.body,


{
new:true,
upsert:true
}


);



res.json({

message:"Settings updated",

settings:updatedSettings

});



}catch(error){


res.status(500).json({

message:error.message

});


}



});




module.exports = router;