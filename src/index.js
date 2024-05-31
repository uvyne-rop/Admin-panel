import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Profile from '../src/components/Profile';
import UserProfileDetail from '../src/components/UserProfileDetail';
import Dashboard from './components/Dashboard';
import SettledLoans from './components/SettledLoans';
import Operations from './components/Operations';
import "tailwindcss/tailwind.css";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="settled-loans" element={<SettledLoans />} />
        <Route path="operations" element={<Operations />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile-detail" element={<UserProfileDetail />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
