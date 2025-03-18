import { getDatabase, onValue, ref, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import "./../styles/studentList.css";
import UpdateForm from "./UpdateForm";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const db = getDatabase();

  useEffect(() => {
    const studentRef = ref(db, "student");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setStudents([]);
        return;
      }

      const studentList = Object.entries(data).map(([key, value]) => ({
        admNr: key,
        name: value.name,
        phoneNr: value.phoneNr,
      }));
      setStudents(studentList);
    });
  }, []);

  const handleDelete = (admNr) => {
    const studentRef = ref(db, "student/" + admNr);
    remove(studentRef);
  };

  const handleUpdateClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="student-list-container">
      <h2>📋 Student List</h2>
      {students.length === 0 ? (
        <p className="no-students">No students added yet.</p>
      ) : (
        <div className="student-list">
          {students.map((student) => (
            <div key={student.admNr} className="student-card">
              <div className="student-info">
                <h3>{student.name}</h3>
                <p><strong>Adm No:</strong> {student.admNr}</p>
                <p><strong>Phone:</strong> {student.phoneNr}</p>
              </div>
              <div className="button-group">
                <button
                  className="update-btn"
                  onClick={() => handleUpdateClick(student)}
                >
                  ✏ Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(student.admNr)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show Update Form */}
      {selectedStudent && (
        <UpdateForm
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
        />
      )}
    </div>
  );
}
