import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import UpdateFaculty from "./UpdateFaculty";

export default function FacultyList() {
  const [faculties, setfaculties] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const db = getFirestore();

  useEffect(() => {
    fetchFaculties();
  }, [selectedFaculty]);

  const fetchFaculties = async () => {
    try {
      const facultiesSnapshot = await getDocs(collection(db, "faculty"));
      const facultiesList = facultiesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setfaculties(facultiesList);
    } catch (error) {
      console.error("Error fetching faculties:", error);
    }
  };

  const handleDelete = (facultyId) => {
    const facultyRef = doc(db, "faculty", facultyId);
    try {
      deleteDoc(facultyRef);
      fetchFaculties();
    } catch (error) {
      console.error("Error deleting faculty:", error);
    }
  };

  const handleUpdateClick = (faculty) => {
    setSelectedFaculty(faculty);
  };

  return (
    <div className="student-list-container">
      <h2>📋 Faculty List</h2>
      {faculties.length === 0 ? (
        <p className="no-students">No faculty added yet.</p>
      ) : (
        <div className="student-list">
          {faculties.map((faculty) => (
            <div key={faculty.id} className="student-card">
              <div className="student-info">
                <h3>{faculty.facultyName}</h3>
                <p>
                  <strong>Faculty Id:</strong> {faculty.id}
                </p>
                <p>
                  <strong>Phone:</strong> {faculty.phoneNr}
                </p>
              </div>
              <div className="button-group">
                <button
                  className="update-btn"
                  onClick={() => handleUpdateClick(faculty)}
                >
                  ✏ Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(faculty.id)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show Update Form */}
      {selectedFaculty && (
        <UpdateFaculty
          selectedFaculty={selectedFaculty}
          setSelectedFaculty={setSelectedFaculty}
        />
      )}
    </div>
  );
}
