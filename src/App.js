import { Route, Routes } from "react-router-dom";
import {
  Home,
  StudentLogin,
  StaffLogin,
  StudentSignup,
  StaffSignup,
  StudentPortalHome,
  StaffPortalHome,
  ExamPaper,
} from "./pages/index";
import "./App.css";

export const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentLogin" element={<StudentLogin />} />
        <Route path="/staffLogin" element={<StaffLogin />} />
        <Route path="/studentSignup" element={<StudentSignup />} />
        <Route path="/staffSignup" element={<StaffSignup />} />
        <Route path="/studentPortalHome" element={<StudentPortalHome />} />
        <Route path="/staffPortalHome" element={<StaffPortalHome />} />
        <Route path="/examPaper/:examId" element={<ExamPaper />} />
        <Route path="/viewPaper/:examId" element={<ExamPaper />} />
        <Route path="/deleteQuestions/:examId" element={<ExamPaper />} />
      </Routes>
    </main>
  );
};
