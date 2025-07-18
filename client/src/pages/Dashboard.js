import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name}!</h2>
        <p className="text-gray-600">Account Type: <span className="font-medium capitalize">{user?.userType}</span></p>
        <p className="text-gray-600">Email: <span className="font-medium">{user?.email}</span></p>
      </div>
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Dashboard functionality will be implemented here.</p>
        <p className="text-gray-500 mt-2">This will show user-specific content based on their account type.</p>
      </div>
    </div>
  );
};

export default Dashboard;