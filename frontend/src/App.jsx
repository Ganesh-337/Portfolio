import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollBackground from "./animation/ScrollBackground";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import WelcomePage from "./pages/WelcomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollBackground />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </BrowserRouter>
  );
}

export default App;
