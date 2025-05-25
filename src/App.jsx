import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import GoogleSignIn from './components/Google';
import Account from './pages/Account';
import Information from './pages/information';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/google" element={<GoogleSignIn />} />
        <Route path="/account" element={<Account />} />
        <Route path="/info" element={<Information />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;