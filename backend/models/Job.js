const mongoose = require("mongoose");

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
      type: Number,
      default: 0,
    },

    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Internship"],
      default: "Full-Time",
    },

    deadline: {
      type: Date,
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