import React from 'react';
import './Dashboard.scss';

const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className="seller-dashboard">
      <h2 className='title'>Welcome back {currentUser?.username} ! 👋</h2>  
      <h2>Freelancer Dashboard</h2>
      
      <div className="dashboard-section">
        <h3>Freelancer Level</h3>
        <p>Level: 25</p>
      </div>

      <div className="dashboard-section">
        <h3>Active Orders</h3>
        <p>12 Active Orders</p>
      </div>

      <div className="dashboard-section">
        <h3>Rating</h3>
        <p>Rating: 3.7</p>
      </div>

      <div className="dashboard-section">
        <h3>Earnings</h3>
        <p>Earnings: ₹ 6,700</p>
      </div>
    </div>
  );
};

export default Dashboard;
