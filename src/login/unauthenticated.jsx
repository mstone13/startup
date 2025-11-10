import React from 'react';
import Button from 'react-bootstrap/Button';
import { AuthState } from '../login/authState';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName || '');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate('/api/auth/login');
  }

  async function createUser() {
    loginOrCreate('/api/auth/register'); 
  }

  async function loginOrCreate(endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: userName, password }),
        credentials: 'include',
      });

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify({ username: userName }));

        props.onLogin(userName, AuthState.Authenticated);
      } else {
        const body = await response.json();
        setDisplayError(`⚠ Error: ${body.message}`);
      }
    } catch (err) {
      setDisplayError('⚠ Unable to reach the server. Please try again.');
    }
  }

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text">@</span>
        <input
          className="form-control"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="your@email.com"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">🔒</span>
        <input
          className="form-control"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </div>

      <Button variant="primary" onClick={loginUser} disabled={!userName || !password}>
        Login
      </Button>
      <Button variant="secondary" onClick={createUser} disabled={!userName || !password}>
        Create Account
      </Button>

      {displayError && <p style={{ color: 'red', marginTop: '10px' }}>{displayError}</p>}
    </div>
  );
}
