import React from 'react';

const SettledLoans = () => {
  // Sample data for the table
  const settledLoansData = [
    { id: 1, firstName: 'Uvyne', lastName: 'Rop', email: 'uvynerop@gmail.com', status: 'Settled', phone: '123-456-7890' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', status: 'pending', phone: '098-765-4321' },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Settled Loans</h2>
      <p className="mb-4">Here are the settled loans.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Phone</th>
            </tr>
          </thead>
          <tbody>
            {settledLoansData.map((loan) => (
              <tr key={loan.id}>
                <td className="py-2 px-4 border-b">{loan.id}</td>
                <td className="py-2 px-4 border-b">{loan.firstName}</td>
                <td className="py-2 px-4 border-b">{loan.lastName}</td>
                <td className="py-2 px-4 border-b">{loan.email}</td>
                <td className="py-2 px-4 border-b">{loan.status}</td>
                <td className="py-2 px-4 border-b">{loan.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SettledLoans;
