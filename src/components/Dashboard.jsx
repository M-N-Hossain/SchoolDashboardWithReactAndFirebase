// components/Dashboard.js
import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import "./../styles/dashboard.css";

export default function Dashboard() {
  const [students, setStudents] = useState([]);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Dashboard</h2>
        <nav className="nav-links">
          <Link to="studentList">Student List</Link>
          <Link to="facultyList">Faculty List</Link>
          <Link to="addStudent">Add Student</Link>
          <Link to="addFaculty">Add Faculty</Link>
        </nav>
      </div>

      {/* Main Content with Context Passing */}
      <div className="main-content">
        <Outlet context={[students, setStudents]} />
      </div>
    </div>
  );
}
