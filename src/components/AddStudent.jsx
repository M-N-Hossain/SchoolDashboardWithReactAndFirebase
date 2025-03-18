// components/AddStudent.js
import { getDatabase, ref, set } from "firebase/database";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { firebaseApp } from "../firbase";
import "./../styles/addStudent.css";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [admNr, setAdmNr] = useState("");
  const [phoneNr, setPhoneNr] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(firebaseApp);
    if (name.trim() && phoneNr.trim()) {
      set(ref(db, "student/" + admNr), {
        name,
        phoneNr,
      })
        .then(() => {
          navigate("/studentList");
        })
        .catch((error) => {
          console.log(error);
        });

      setAdmNr("");
      setName("");
      setPhoneNr("");
    }
  };

  return (
    <div className="add-student-container">
      <h2>Add Student</h2>
      <form className="add-student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Admission Number"
          value={admNr}
          onChange={(e) => setAdmNr(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={phoneNr}
          onChange={(e) => setPhoneNr(e.target.value)}
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}
