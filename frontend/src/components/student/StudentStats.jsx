import React from "react";

import {
  FileText,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";

import "../../styles/student/StudentStats.css";

function StudentStats() {

  return (

    <div className="stats-grid">

      <div className="stat-card">

        <div className="stat-icon blue">
          <FileText size={24} />
        </div>

        <div>
          <h2>12</h2>
          <p>Applications<br />Submitted</p>
        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon green">
          <CheckCircle size={24} />
        </div>

        <div>
          <h2>3</h2>
          <p>Shortlisted</p>
        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon orange">
          <Clock size={24} />
        </div>

        <div>
          <h2>2</h2>
          <p>In Review</p>
        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon purple">
          <XCircle size={24} />
        </div>

        <div>
          <h2>1</h2>
          <p>Rejected</p>
        </div>

      </div>

    </div>

  );
}

export default StudentStats;