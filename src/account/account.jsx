import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './account.css';
export function Account() {
  const navigate = useNavigate();
  let savedUser = null;
    try {
      const stored = localStorage.getItem('user');
      if (stored) savedUser = JSON.parse(stored);
    } catch (err) {
      console.error('Invalid user data in localStorage:', err);
      localStorage.removeItem('user');
    }

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isRegistering = queryParams.get('register') === 'true';

  const [user, setUser] = useState(savedUser);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    const newUser = { name, username, email, password };
    localStorage.setItem('user', JSON.stringify(newUser))
    localStorage.setItem('isLoggedIn', 'true')
    setUser(newUser);
    navigate('/account', {replace: true });
  }


  if(user && isRegistering) {
    navigate('/account');
    return null;
  }

  if(!user || isRegistering){
    return (
      <div className="account-container">
        <h2>Create Account!</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }

  return (
    <main>
      <section className="account-info">
          <h3>{user.name}</h3>
          <div className="info-grid">
            <div className="info-card"><b>Email:</b> {user.email}</div>
            <div className="info-card"><b>Username:</b>{user.username}</div>
            <div className="info-card"><b>Member Since:</b> *date joined*</div>
            <div className="info-card"><b>Friends:</b> *list of friends*</div>
          </div>
      </section>
    </main>
  );
}
