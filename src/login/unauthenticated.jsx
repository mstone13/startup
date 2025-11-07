import React, { useState } from 'react';
import './unauthenticated.css';

export function Unauthenticated({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleAuth(endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        localStorage.setItem('userName', email);
        onLogin(email);
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
        <button onClick={() => handleAuth('/api/auth/login')} disabled={!email || !password}>
          Login
        </button>
        <button onClick={() => handleAuth('/api/auth/create')} disabled={!email || !password}>
          Create Account
        </button>
      </div>

      {errorMsg && <p className="error">{errorMsg}</p>}
    </div>
  );
}
