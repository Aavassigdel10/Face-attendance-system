import { Routes, Route } from "react-router-dom";
import HomeLayout from "./components/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import FaceCapture from "./images/FaceCapture";
import StudentDashboard from "./dashboard/StudentDashboard";
import TeacherDashboard from "./dashboard/TeacherDashboard";
import Register from "./student/Register";




function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Capture" element={<FaceCapture />} />
       <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/register" element={<Register />} />


    </Routes>
  );
}

export default App;
