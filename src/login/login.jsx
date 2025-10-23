import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (username === 'user' && password === 'password') {
      const dummyUser = { username: 'user', email: 'user@example.com', name: 'Demo User' };
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(dummyUser)); // store user info
      navigate('/');
}

  }

  function handleCreateAccount() {
    navigate('/account?register=true');
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="buttons-row">
          <button type="submit">Log In</button>

          <button type="button" onClick={handleCreateAccount}>
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
