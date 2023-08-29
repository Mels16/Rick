import "bootstrap/dist/css/bootstrap.min.css";
// import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
     <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/episode" element={<h1>episode</h1>} />
          <Route path="/location" element={<h1>location</h1>} />
        </Routes>
     </Router>
    </>
  )
}

export default App
