import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import Test from "./components/Test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetupBot from "./components/SetupBot";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createGame" element={<Test />} />
        <Route path="/createGame/bot" element={<SetupBot />} />
      </Routes>
    </Router>
  );
}

export default App;
