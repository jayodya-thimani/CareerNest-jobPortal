const express = require("express");
const router = express.Router();

const Job = require("../models/Job");
const { DEFAULT_JOB_TYPE } = require("../constants/jobTypes");

// get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch jobs" });
  }
});

// create a new job
router.post("/create", async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      category,
      jobType,
      salary,
      experience,
      deadline,
      description,
      requirements,
      status,
    } = req.body;

    if (!title || !company || !location || !description) {
      return res.status(400).json({ message: "Please provide title, company, location, and description" });
    }

    const newJob = await Job.create({
      title,
      company,
      location,
      description,
      salary: salary || "0",
      jobType: jobType || DEFAULT_JOB_TYPE,
      deadline: deadline || null,
      category: category || "Job",
      experience: experience || "",
      requirements: requirements || "",
      status: status || "Active",
    });

    res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create job" });
  }
});

module.exports = router;