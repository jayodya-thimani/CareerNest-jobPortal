const express = require("express");

const router = express.Router();

const SavedJob = require("../models/SavedJob");



// GET saved jobs

router.get("/:studentId", async(req,res)=>{

    try{

        const jobs = await SavedJob.find({
            studentId:req.params.studentId
        });


        res.json(jobs);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});





// ADD saved job

router.post("/", async(req,res)=>{


    try{


        const job = new SavedJob(req.body);


        await job.save();


        res.json(job);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }


});






// DELETE saved job

router.delete("/:id", async(req,res)=>{


    try{


        await SavedJob.findByIdAndDelete(
            req.params.id
        );


        res.json({
            message:"Removed"
        });


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }


});



module.exports = router;