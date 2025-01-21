import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./Components/AboutUs/Aboutus";

function App() {
  return (
    <Router>
      <>
        <Routes>
          {/* Route for Home Page */}
          <Route path="/" element={<Home />} />

          {/* Route for About Us Page */}
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
