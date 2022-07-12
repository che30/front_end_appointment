import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import DoctorDashboard from './components/DoctorDashboard';
import Login from './containers/Login';
import PatientDashboard from './components/PatientDashboard';
import Signup from './containers/Signup';
import ProtectedRoute from './ProtectedRoute';
import FourOFourError from './components/404Error';

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
      <Route path="*" element={<FourOFourError />} />

    </Routes>
  </>
);
export default MyRoute;
