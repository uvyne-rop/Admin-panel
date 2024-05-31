import React from 'react';

const Dashboard = () => {
  const loanApplications = [
    { firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890', loanApplied: '$5000' },
    { firstName: 'Jane', lastName: 'Smith', phoneNumber: '098-765-4321', loanApplied: '$10000' },
    // Add more data as needed
  ];

  const userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    loanAmount: '$5000',
    monthlyIncome: '$3000',
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>Welcome to the Dashboard!</p>
      <div className="flex">
        {/* Left Side - Loan Approval Table */}
        <div className="w-1/2 pr-4">
          <h3 className="text-xl font-semibold mb-4">Loan Applications</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">First Name</th>
                  <th className="py-2 px-4 border-b">Last Name</th>
                  <th className="py-2 px-4 border-b">Phone Number</th>
                  <th className="py-2 px-4 border-b">Loan Applied</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                {loanApplications.map((application, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b">{application.firstName}</td>
                    <td className="py-2 px-4 border-b">{application.lastName}</td>
                    <td className="py-2 px-4 border-b">{application.phoneNumber}</td>
                    <td className="py-2 px-4 border-b">{application.loanApplied}</td>
                    <td className="py-2 px-4 border-b">
                      <button className="text-green-500 hover:underline mr-2">Approve</button>
                      <button className="text-red-500 hover:underline">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Side - User Profile */}
        <div className="w-1/2 pl-4">
          <h3 className="text-xl font-semibold mb-4">User Profile</h3>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-lg font-semibold mb-2">Personal Information</h4>
            <p className="mb-2"><strong>First Name:</strong> {userProfile.firstName}</p>
            <p className="mb-2"><strong>Last Name:</strong> {userProfile.lastName}</p>
            <p className="mb-2"><strong>Email:</strong> {userProfile.email}</p>
            <p className="mb-4"><strong>Phone:</strong> {userProfile.phone}</p>

            <h4 className="text-lg font-semibold mb-2">Financial Information</h4>
            <p className="mb-2"><strong>Loan Amount:</strong> {userProfile.loanAmount}</p>
            <p><strong>Monthly Income:</strong> {userProfile.monthlyIncome}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
