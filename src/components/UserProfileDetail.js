import React from 'react';
import { useLocation } from 'react-router-dom';

const UserProfileDetail = () => {
  const location = useLocation();
  const { profileData } = location.state || {};

  if (!profileData) {
    return <div>No user data available</div>;
  }

  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">User Profile Detail</h1>
      <img
        className="w-32 h-32 rounded-full mb-4"
        src={profileData.photoUrl}
        alt={profileData.name}
      />
      <h3 className="text-xl font-bold">{profileData.name}</h3>
      <p className="text-gray-600">{profileData.email}</p>
      <p className="text-gray-600">ID: {profileData.id}</p>
      <p className="text-gray-600">First Name: {profileData.firstName}</p>
      <p className="text-gray-600">Last Name: {profileData.lastName}</p>
      <p className="text-gray-600">Phone: {profileData.phone}</p>
      <p className="text-gray-600">Status: {profileData.status}</p>
      <div className="flex space-x-4 mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Add User</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded">Delete</button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded">Modify</button>
      </div>
    </div>
  );
};

export default UserProfileDetail;
