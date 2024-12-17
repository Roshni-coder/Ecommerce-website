import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashbord.css'; // Import the CSS file

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      setIsLoggedIn(true); // If token exists, set logged in to true
    } else {
      navigate('/'); // Redirect to login page if no token is found
    }
  }, [navigate]);

  // If the user is not logged in, return null (or any alternative like a loading spinner)
  if (!isLoggedIn) {
    return null; // Or you can show a loading spinner or redirect immediately
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome to Your Admin Panel</h1>
        <p>Your personalized admin dashboard with all your settings and controls.</p>
        <button onClick={() => navigate('/settings')}>Go to Settings</button>
        <button
          onClick={() => {
            localStorage.removeItem('auth-token');
            navigate('/'); // Logout and redirect to login page
          }}
        >
          Logout
        </button>

        {/* Admin Panel content goes here */}
        <div className="admin-panel">
          <h2>Admin Control Panel</h2>
          <p>Manage users, view reports, and more...</p>
          {/* Add additional admin panel functionality here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
