import React from 'react';
import LandingPage from "./react-components/LandingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './react-components/Login';
import Register from "./react-components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
