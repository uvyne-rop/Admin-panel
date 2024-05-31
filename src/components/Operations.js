import React from 'react';

const Operations = () => {
  // Sample data for the table
  const operationsData = [
    { id: 1, firstName: 'Uvyne', lastName: 'Rop', email: 'uvynerop@gmail.com', status: 'Approved', loanAmount: '$5000', phone: '123-456-7890' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', status: 'Pending', loanAmount: '$10000', phone: '098-765-4321' },
    // Add more data as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Operations</h2>
      <p className="mb-4">Manage your operations here.</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Loan Amount</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {operationsData.map((operation) => (
              <tr key={operation.id}>
                <td className="py-2 px-4 border-b">{operation.id}</td>
                <td className="py-2 px-4 border-b">{operation.firstName}</td>
                <td className="py-2 px-4 border-b">{operation.lastName}</td>
                <td className="py-2 px-4 border-b">{operation.email}</td>
                <td className="py-2 px-4 border-b">{operation.status}</td>
                <td className="py-2 px-4 border-b">{operation.loanAmount}</td>
                <td className="py-2 px-4 border-b">{operation.phone}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500 hover:underline mr-2">View</button>
                  <button className="text-yellow-500 hover:underline mr-2">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Operations;
