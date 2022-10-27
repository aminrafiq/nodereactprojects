import { Route, Routes } from "react-router-dom";

import "./App.css";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import ManageCourse from "./pages/ManageCourse";
import Teachers from "./pages/Teachers";
import ManageTeacher from "./pages/ManageTeacher";
import Students from "./pages/Students";
import ManageStudent from "./pages/ManageStudent";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/add" element={<ManageCourse />} />
        <Route path="/courses/edit/:id" element={<ManageCourse />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teachers/add" element={<ManageTeacher />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/add" element={<ManageStudent />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
