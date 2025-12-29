import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <div className="metrics-grid">
        <div className="metric-card blue">
          <div className="metric-icon">💬</div>
          <div className="metric-value">47</div>
          <div className="metric-title">Active Conversations</div>
        </div>
        <div className="metric-card green">
          <div className="metric-icon">📨</div>
          <div className="metric-value">1,234</div>
          <div className="metric-title">Messages Today</div>
        </div>
        <div className="metric-card purple">
          <div className="metric-icon">⚡</div>
          <div className="metric-value">95%</div>
          <div className="metric-title">Response Rate</div>
        </div>
        <div className="metric-card orange">
          <div className="metric-icon">⏱️</div>
          <div className="metric-value">2.3s</div>
          <div className="metric-title">Avg Response Time</div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
