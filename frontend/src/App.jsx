import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Engine from "./components/ResearchEngine";
import CasePrediction from "./components/Predictive";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/engine" element={<Engine />} />
          <Route path="/case-prediction" element={<CasePrediction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
