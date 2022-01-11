import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import Test from "./components/Test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetupBot from "./components/SetupBot";
import Friend from "./components/Friend";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createGame" element={<Test />} />
        <Route path="/createGame/bot" element={<SetupBot />} />
        <Route path="/createGame/friend" element={<Friend />} />
      </Routes>
    </Router>
  );
}

export default App;
