import { Route, Routes } from "react-router";
import AddFaculty from "./components/AddFaculty";
import AddStudent from "./components/AddStudent";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import FacultyList from "./components/FacultyList";
import StudentList from "./components/StudentList";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "",
  //     Component: Dashboard,
  //     children: [
  //       {
  //         path: "studentList",
  //         Component: StudentList,
  //       },
  //       {
  //         path: "adStudent",
  //         Component: AddStudent,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<StudentList />} />
        <Route path="studentList" element={<StudentList />} />
        <Route path="addStudent" element={<AddStudent />} />
        <Route path="addFaculty" element={<AddFaculty />} />
        <Route path="facultyList" element={<FacultyList />} />
      </Route>
    </Routes>
  );
}

export default App;
