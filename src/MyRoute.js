import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import Signup from './components/Signup';

const MyRoute = () => (
  <>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  </>
);
export default MyRoute;
