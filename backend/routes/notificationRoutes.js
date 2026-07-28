const express = require("express");

const router = express.Router();

const Notification =
require("../models/Notification");



// Get student notifications

router.get("/:email", async(req,res)=>{

try{

const notifications =
await Notification.find({
studentEmail:req.params.email
})
.sort({
date:-1
});


res.json(notifications);


}catch(error){

res.status(500)
.json({
message:error.message
});

}


});





// Create notification (Admin)

router.post("/",async(req,res)=>{


try{


const notification =
new Notification(req.body);


await notification.save();


res.status(201)
.json(notification);



}catch(error){

res.status(500)
.json({
message:error.message
});

}


});



module.exports = router;