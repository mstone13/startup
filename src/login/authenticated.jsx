import React from 'react';
import { useNavigate } from 'react-router-dom';
import './authenticated.css';

export function Authenticated({ userName, onLogout }) {
  const navigate = useNavigate();

  async function logout() {
    try {
      await fetch(`/api/auth/logout`, { method: 'DELETE' });
    } catch {
      // Assume offline
    } finally {
      localStorage.removeItem('userName');
      onLogout();
    }
  }

  return (
    <div className="authenticated-container">
      <h2>Welcome, {userName}!</h2>
      <div className="button-row">
        <button onClick={() => navigate('/')}>Go to Dashboard</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
