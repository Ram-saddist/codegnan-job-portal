
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentSignup from './Signup/StudentSignup';
import CompanySignup from './Signup/CompanySignup';
import NotFound from './NotFound';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Footer from './Footer/Footer';

export default function App() {
  return (
    <div>
      <Navigation />
      <div style={{ paddingTop: "64px",marginBottom:"10px" }}>
        {/* 64px is the height of the Navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />}>
            <Route path="student" element={<StudentSignup />} />
            <Route path="company" element={<CompanySignup />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

