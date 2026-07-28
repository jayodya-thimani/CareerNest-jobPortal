const User = require("../models/User");
const Job = require("../models/Job");
const Application = require("../models/Application");


// =====================================
// Dashboard Statistics
// =====================================

const getDashboardStats = async (req, res) => {
  try {
    const students = await User.countDocuments({
      role: "student",
    });

    const employers = await User.countDocuments({
      role: "employer",
    });

    const jobs = await Job.countDocuments({
    type: "Job"
});

    const internships = await Job.countDocuments({
    type: "Internship"
});

const applications = await Application.countDocuments();

    res.status(200).json({
      students,
      employers,
      jobs,
      internships,
      applications,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// =====================================
// Get All Students
// =====================================

const getStudents = async (req, res) => {
  try {
    const students = await User.find({
      role: "student",
    }).select("-password");

    res.status(200).json(students);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};
// ===============================
// Delete Student
// ===============================

const deleteStudent = async (req, res) => {

    try {

        const student = await User.findById(req.params.id);

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Student deleted successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
//get employers
const getEmployers = async (req, res) => {

    try {

        const employers = await User.find({
            role: "employer"
        }).select("-password");

        res.json(employers);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
//delete employer
const deleteEmployer = async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.json({
            message: "Employer Deleted Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const getJobs = async (req, res) => {

    try {

        const jobs = await Job.find();

        res.json(jobs);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const deleteJob = async (req, res) => {

    try {

        await Job.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Job deleted successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const getApplications = async (req, res) => {

    try {

        const applications = await Application.find()

            .populate("student", "name email")

            .populate("job", "title type")

            .populate("employer", "name company");

        res.json(applications);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const getStudentById = async (req, res) => {
    try {

        const student = await User.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }
};
const updateStudent = async (req, res) => {

    try {

        const student = await User.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true }

        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student Updated Successfully",
            student
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const getRecentJobs = async (req, res) => {

    try {

        const recentJobs = await Job.find()
            .sort({ createdAt: -1 })
            .limit(5);

        res.json(recentJobs);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const getLatestStudents = async(req,res)=>{


    try{


        const students = await User.find({role:"student"})
        .sort({
            createdAt:-1
        })
        .limit(5);



        res.json(students);



    }catch(error){


        res.status(500).json({
            message:error.message
        });


    }


};
const getLatestApplications = async(req,res)=>{


    try{


        const applications = await Application.find()
        .populate("student","name email")
        .populate("job","title")
        .sort({
            createdAt:-1
        })
        .limit(5);



        res.json(applications);



    }catch(error){


        res.status(500).json({
            message:error.message
        });


    }


};
const approveStudent = async (req, res) => {

    try {

        const student = await User.findByIdAndUpdate(

            req.params.id,

            {
                isApproved: true,
                status: "Approved",
            },

            { new: true }

        );

        res.json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }

};
const disableStudent = async (req, res) => {

    try {

        const student = await User.findByIdAndUpdate(

            req.params.id,

            {
                status: "Disabled"
            },

            {
                new: true
            }

        );

        if (!student) {

            return res.status(404).json({
                message: "Student not found"
            });

        }

        res.status(200).json({
            message: "Student Disabled Successfully",
            student
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const approveEmployer = async (req, res) => {

    try {

        const employer = await User.findByIdAndUpdate(

            req.params.id,

            {
                status: "Approved"
            },

            {
                new: true
            }

        );

        res.status(200).json(employer);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const disableEmployer = async (req, res) => {

    try {

        const employer = await User.findByIdAndUpdate(

            req.params.id,

            {
                status: "Disabled"
            },

            {
                new: true
            }

        );

        res.status(200).json(employer);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const getEmployerById = async (req, res) => {

    try {

        const employer = await User.findById(req.params.id);

        if (!employer) {

            return res.status(404).json({
                message: "Employer not found"
            });

        }

        res.status(200).json(employer);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const updateEmployer = async (req, res) => {

    try {

        const employer = await User.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        if (!employer) {

            return res.status(404).json({
                message: "Employer not found"
            });

        }

        res.status(200).json({

            message: "Employer Updated Successfully",

            employer

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const getJobById = async (req, res) => {

    try {

        const job = await Job.findById(req.params.id);

        if (!job) {

            return res.status(404).json({
                message: "Job not found"
            });

        }

        res.status(200).json(job);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const updateJob = async (req, res) => {

    try {

        const job = await Job.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        if (!job) {

            return res.status(404).json({
                message: "Job not found"
            });

        }

        res.status(200).json({

            message: "Job Updated Successfully",

            job

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const acceptApplication = async (req, res) => {

    try {

        const application = await Application.findByIdAndUpdate(

            req.params.id,

            {
                status: "Accepted"
            },

            {
                new: true
            }

        );

        if (!application) {

            return res.status(404).json({
                message: "Application not found"
            });

        }

        res.status(200).json({
            message: "Application Accepted",
            application
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const rejectApplication = async (req, res) => {

    try {

        const application = await Application.findByIdAndUpdate(

            req.params.id,

            {
                status: "Rejected"
            },

            {
                new: true
            }

        );

        if (!application) {

            return res.status(404).json({
                message: "Application not found"
            });

        }

        res.status(200).json({
            message: "Application Rejected",
            application
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const getApplicationById = async (req, res) => {

    try {

        const application = await Application.findById(req.params.id);

        if (!application) {

            return res.status(404).json({
                message: "Application not found"
            });

        }

        res.status(200).json(application);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const updateApplication = async (req, res) => {

    try {

        const application = await Application.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        if (!application) {

            return res.status(404).json({
                message: "Application not found"
            });

        }

        res.status(200).json({

            message: "Application Updated Successfully",

            application

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

};
module.exports = {
  getDashboardStats,
  getStudents,
  deleteStudent,
  getStudentById,
  updateStudent,
  getEmployers,
  deleteEmployer,
  getJobs,
  deleteJob,
  getApplications,
  getRecentJobs,
  getLatestApplications,
  getLatestStudents,
  approveStudent,
  disableStudent,
  approveEmployer,
  disableEmployer,
  getEmployerById,
  updateEmployer,
  getJobById,
  updateJob,
  acceptApplication,
  rejectApplication,
  getApplicationById,
  updateApplication

};

  
  