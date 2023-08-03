// Dashboard.js
import React from 'react';

const Dashboard = ({ username }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
