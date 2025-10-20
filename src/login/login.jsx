import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // simple dummy login check
    if (username === 'user' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/'); // redirect to calendar/home
    } else {
      alert('Invalid credentials — try user/password');
    }
  }

  return (
    <div className="login-container text-center">
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
