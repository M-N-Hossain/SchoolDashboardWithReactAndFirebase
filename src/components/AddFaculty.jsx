import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { firebaseApp } from "../firbase";

export default function AddFaculty() {
  const [facultyName, setFacultyName] = useState("");
  const [phoneNr, setPhoneNr] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore(firebaseApp);
    if (facultyName.trim() && phoneNr.trim()) {
      addDoc(collection(db, "faculty"), {
        facultyName,
        phoneNr,
      }).then(() => {
          navigate("/facultyList");
        })
        .catch((error) => {
          console.log(error);
        });

      setFacultyName("");
      setPhoneNr("");
    }
  };

  return (
    <div className="add-student-container">
      <h2>Add Faculty</h2>
      <form className="add-student-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={facultyName}
          onChange={(e) => setFacultyName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={phoneNr}
          onChange={(e) => setPhoneNr(e.target.value)}
          required
        />
        <button type="submit">Add Faculty</button>
      </form>
    </div>
  );
}
