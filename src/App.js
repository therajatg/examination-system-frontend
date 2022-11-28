import { Route, Routes } from "react-router-dom";
import {
  Home,
  StudentLogin,
  StaffLogin,
  StudentSignup,
  StaffSignup,
  StudentPortalHome,
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
        <Route path="/studentPortalHome/" element={<StudentPortalHome />} />
      </Routes>
    </main>
  );
};
