import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css'; // Import the custom CSS

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard">
      <h1>Welcome Back, {user ? user.name : 'Guest'}</h1>
      <section className="dashboard__profile">
        <h2>Profile</h2>
        <p>Name: {user ? user.name : 'N/A'}</p>
        <p>Email: {user ? user.email : 'N/A'}</p>
      </section>
    </div>
  );
};

export default Dashboard;
