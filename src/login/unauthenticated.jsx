import React, { useState } from 'react';
import './unauthenticated.css';
import { useNavigate } from 'react-router-dom'

export function Unauthenticated({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  async function handleAuth(endpoint, actionType) {
    try {
      const response = await fetch(endpoint, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });

      if (response.ok) {
        localStorage.setItem('userName', JSON.stringify({ username: email}));
        
        if (actionType === 'register') {
          navigate('/account?register=true');
        } else {
        onLogin(email, AuthState.Authenticated);
        navigate('/')
      }
    } else {
        const data = await response.json();
        setErrorMsg(`⚠ ${data.msg}`);
      }
    } catch {
      setErrorMsg('⚠ Unable to reach the server. Please try again.');
    }
  }

  return (
    <div className="unauthenticated-container">
      <h2>Login or Create an Account</h2>

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="button-row">
        <button onClick={() => handleAuth('/api/auth/login', 'login')} disabled={!email || !password}>
          Login
        </button>
        <button onClick={() => handleAuth('/api/auth/register', 'register')} disabled={!email || !password}>
          Create Account
        </button>
      </div>

      {errorMsg && <p className="error">{errorMsg}</p>}
    </div>
  );
}
