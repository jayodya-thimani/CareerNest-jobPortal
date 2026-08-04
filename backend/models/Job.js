const mongoose = require("mongoose");
const { JOB_TYPES, DEFAULT_JOB_TYPE } = require("../constants/jobTypes");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      default: "0",
    },

    jobType: {
      type: String,
      enum: JOB_TYPES,
      default: DEFAULT_JOB_TYPE,
    },

    deadline: {
      type: Date,
    },

    category: {
      type: String,
      default: "Job",
    },

    experience: {
      type: String,
      default: "",
    },

    requirements: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Active", "Closed"],
      default: "Active",
    },

    employer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);