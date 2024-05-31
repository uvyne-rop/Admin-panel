import React from 'react';
import "tailwindcss/tailwind.css"

const StatsBar = () => {
  const stats = {
    registeredUsers: 120,
    appliedLoans: 75,
    approvedLoans: 50,
    rejectedLoans: 25,
  };

  return (
    <div className="flex justify-between mb-6">
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Registered Users: {stats.registeredUsers}
      </button>
      <button className="bg-yellow-500 text-white py-2 px-4 rounded">
        Applied Loans: {stats.appliedLoans}
      </button>
      <button className="bg-green-500 text-white py-2 px-4 rounded">
        Approved Loans: {stats.approvedLoans}
      </button>
      <button className="bg-red-500 text-white py-2 px-4 rounded">
        Rejected Loans: {stats.rejectedLoans}
      </button>
    </div>
  );
};

export default StatsBar;
