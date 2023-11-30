import React from 'react';
import Signup from './pages/auth/Register';
import Login from './pages/auth/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/auth/register" element={<Signup />} />

          <Route path="/auth/login" element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
