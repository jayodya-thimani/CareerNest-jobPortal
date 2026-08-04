const express=require("express");
const router=express.Router();

const Application=require("../models/Application");



// submit application

router.post("/",async(req,res)=>{

try{


const application=
new Application(req.body);


await application.save();


res.json({

message:"Application submitted",
application

});


}
catch(error){

res.status(500).json(error);

}


});





// get student applications

router.get("/:studentId",async(req,res)=>{


const applications =
await Application.find({

studentId:req.params.studentId

});


res.json(applications);


});




module.exports=router;