const express = require("express");
const router = express.Router();

const {
  getStudents,
  deleteStudent,
} = require("../controllers/adminStudentController");

router.get("/", getStudents);

router.delete("/:id", deleteStudent);

module.exports = router;