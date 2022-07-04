import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import PatientDashboard from './components/PatientDashboard';
import Signup from './components/Signup';

const MyRoute = () => (
  <>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Login" element={<Login />} />
      <Route path="Dashboard" element={<PatientDashboard />} />
    </Routes>
  </>
);
export default MyRoute;
