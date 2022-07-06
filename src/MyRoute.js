import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import DoctorDashboard from './components/DoctorDashboard';
import Login from './containers/Login';
import PatientDashboard from './components/PatientDashboard';
import Signup from './containers/Signup';
import ProtectedRoute from './ProtectedRoute';

const MyRoute = () => (
  <>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="Patientdashboard" element={<PatientDashboard />} />
        <Route path="DoctorDashboard" element={<DoctorDashboard />} />
      </Route>
    </Routes>
  </>
);
export default MyRoute;
