const express = require("express");

const router = express.Router();

const {
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

} = require("../controllers/adminController");

// Dashboard Statistics

router.get("/dashboard", getDashboardStats);
router.get("/students", getStudents);
router.delete("/students/:id", deleteStudent);
router.get("/students/:id", getStudentById);
router.put("/students/:id", updateStudent);
router.get("/employers", getEmployers);
router.delete("/employers/:id",deleteEmployer);
router.get("/jobs", getJobs);
router.delete("/jobs/:id", deleteJob);
router.get("/applications", getApplications);
router.get("/recent-jobs", getRecentJobs);
router.get("/latest-applications",getLatestApplications);
router.get("/latest-students",getLatestStudents);
router.put("/students/approve/:id",approveStudent);
router.put("/students/disable/:id",disableStudent);
router.put("/employers/approve/:id",approveEmployer);
router.put("/employers/disable/:id",disableEmployer);
router.get("/employers/:id",getEmployerById);
router.put("/employers/:id",updateEmployer);
router.get("/jobs/:id", getJobById);
router.put("/jobs/:id", updateJob);
router.put("/applications/accept/:id",acceptApplication);
router.put("/applications/reject/:id",rejectApplication);
router.get("/applications/:id",getApplicationById);
router.put("/applications/:id",updateApplication);
module.exports = router;