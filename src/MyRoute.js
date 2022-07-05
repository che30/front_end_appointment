import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import DoctorDashboard from './components/DoctorDashboard';
import Login from './components/Login';
import PatientDashboard from './components/PatientDashboard';
import Signup from './components/Signup';

const MyRoute = () => (
  <>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Login" element={<Login />} />
      <Route path="Patientdashboard" element={<PatientDashboard />} />
      <Route path="DoctorDashboard" element={<DoctorDashboard />} />
    </Routes>
  </>
);
export default MyRoute;
