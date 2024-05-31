import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import StatsBar from './components/StatsBar';
import "tailwindcss/tailwind.css"

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-blue-400">
        <StatsBar />
        <Outlet />
      </main>
    </div>
  );
};

export default App;
