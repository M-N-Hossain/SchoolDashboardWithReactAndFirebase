import React, { useState } from "react";
import { getDatabase, ref, update } from "firebase/database";
import "./../styles/updateForm.css";

export default function UpdateForm({ selectedStudent, setSelectedStudent }) {
  const [updatedName, setUpdatedName] = useState(selectedStudent.name);
  const [updatedPhoneNr, setUpdatedPhoneNr] = useState(selectedStudent.phoneNr);

  const db = getDatabase();

  const handleUpdateSubmit = () => {
    if (!selectedStudent) return;

    const studentRef = ref(db, `student/${selectedStudent.admNr}`);
    update(studentRef, { name: updatedName, phoneNr: updatedPhoneNr });

    setSelectedStudent(null);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Update Student</h3>
        <form onSubmit={(e) => { e.preventDefault(); handleUpdateSubmit(); }}>
          <label>
            Admission No:
            <input type="text" value={selectedStudent.admNr} disabled />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={updatedName}
              onChange={(e) => setUpdatedName(e.target.value)}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              value={updatedPhoneNr}
              onChange={(e) => setUpdatedPhoneNr(e.target.value)}
              required
            />
          </label>
          <div className="button-group">
            <button className="save-btn" type="submit">
              💾 Save
            </button>
            <button
              className="cancel-btn"
              type="button"
              onClick={() => setSelectedStudent(null)}
            >
              ❌ Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
