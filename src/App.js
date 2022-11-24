import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import "./App.css";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
