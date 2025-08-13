import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BottomNavigation.css';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: '🏠', label: '홈' },
    { path: '/basic', icon: '🎵', label: '기본연습' },
    { path: '/advanced', icon: '⭐', label: '심화연습' },
    { path: '/analysis', icon: '📊', label: '분석' },
    { path: '/environment', icon: '⚙️', label: '설정' },
    { path: '/info', icon: 'ℹ️', label: '정보' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-navigation">
      <div className="nav-container">
        {menuItems.map((item) => (
          <button
            key={item.path}
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
