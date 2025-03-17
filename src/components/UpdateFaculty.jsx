import { doc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./../styles/updateForm.css";

export default function UpdateFaculty({ selectedFaculty, setSelectedFaculty }) {
  const [updatedFacultyName, setUpdatedFacultyName] = useState(
    selectedFaculty.facultyName
  );
  const [updatedPhoneNr, setUpdatedPhoneNr] = useState(selectedFaculty.phoneNr);

  const navigate = useNavigate();
  const db = getFirestore();

  const handleUpdateSubmit = () => {
    if (!selectedFaculty) return;

    console.log("first");
    const facultyRef = doc(db, "faculty", selectedFaculty.id);
    try {
      updateDoc(facultyRef, {
        facultyName: updatedFacultyName,
        phoneNr: updatedPhoneNr,
      });
      navigate("/facultyList");
    } catch (error) {
      console.error("Error updating faculty:", error);
    }

    setSelectedFaculty(null);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Update Faculty</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateSubmit();
          }}
        >
          <label>
            Faculty No:
            <input type="text" value={selectedFaculty.id} disabled />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={updatedFacultyName}
              onChange={(e) => setUpdatedFacultyName(e.target.value)}
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
              onClick={() => setSelectedFaculty(null)}
            >
              ❌ Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
