import React, { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Workflows from './pages/Workflows';
import Conversations from './pages/Conversations';
import Users from './pages/Users';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import './styles.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [notifications, setNotifications] = useState([]);
  const [isOnline, setIsOnline] = useState(true);

  // Simulated real-time notification system
  useEffect(() => {
    const interval = setInterval(() => {
      // This would be replaced with actual WebSocket connection
      const mockNotifications = [
        { type: 'message', text: 'New message from user', time: 'Just now' },
        { type: 'workflow', text: 'Workflow completed', time: '2m ago' }
      ];
      if (Math.random() > 0.7) {
        setNotifications(prev => [...prev.slice(-4), mockNotifications[0]]);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'conversations', name: 'Conversations', icon: '💬', badge: 12 },
    { id: 'workflows', name: 'Workflows', icon: '🔄' },
    { id: 'users', name: 'Users', icon: '👥' },
    { id: 'analytics', name: 'Analytics', icon: '📈' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'workflows': return <Workflows />;
      case 'conversations': return <Conversations />;
      case 'users': return <Users />;
      case 'analytics': return <Analytics />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="admin-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">🤖</div>
            <div className="logo-text">
              <h1>BotMaster</h1>
              <span>Admin Console</span>
            </div>
          </div>
        </div>

        <nav className="nav-menu">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => setCurrentPage(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.name}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="connection-status">
            <div className={`status-indicator ${isOnline ? 'online' : 'offline'}`}></div>
            <span>{isOnline ? 'All Systems Online' : 'Connection Lost'}</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <div className="header-left">
            <h2 className="page-title">{navigation.find(n => n.id === currentPage)?.name}</h2>
          </div>
          
          <div className="header-right">
            <button className="notification-btn">
              🔔
              {notifications.length > 0 && (
                <span className="notification-count">{notifications.length}</span>
              )}
            </button>
            
            <div className="admin-profile">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" />
              <div className="profile-info">
                <span className="profile-name">Admin User</span>
                <span className="profile-role">Super Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;