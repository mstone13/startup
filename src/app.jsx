import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';

import { Calendar } from './calendar/calendar.jsx';
import { Account } from './account/account.jsx';
import { Other_Users } from './other_users/other_users.jsx';
import { To_Do_List } from './to_do_list/to_do_list.jsx';
import { Login } from './login/login.jsx';
import { AuthState } from './login/authState'

function ProtectedRoute({ authState, children }) {
  return authState === AuthState.Authenticated ? children : <Navigate to="/login" />;
}

function Header({ authState, onLogout }) {
  const navigate = useNavigate();
  const isLoggedIn = authState === AuthState.Authenticated;

  return (
  <>
    <header>
      <h1 className="title">My Planner</h1>
      <nav>
        <ul className="options">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/to_do_list">To-Do List</NavLink></li>
          <li><NavLink to="/account">Account</NavLink></li>
          <li><NavLink to="/other_users">Friends</NavLink></li>
        </ul>
      </nav>

      <div className="websocket-placeholder">
        *Notifications to go here*
      </div>

      <div className="login-box">
        {isLoggedIn ? (
          <button className="logout-button" onClick={handleLogout}>Log Out</button>
        ) : (
          <button onClick={() => navigate('/login')}>Log In</button>
        )}
      </div>
    </header>
  </>
);
}

function Layout({ userName, authState, onAuthChange }) {
  const location = useLocation();

  return (
    <div>
        <Header 
          authState={authState}
          onLogout={() => onAuthChange('', AuthState.Unauthenticated)}
        />

        <main>
          <Routes>
            <Route
              path="/login"
              element={<Login userName={userName} authState={authState} onAuthChange={onAuthChange} />}
              />

            <Route
              path="/" 
              element={<ProtectedRoute authState={authState}><Calendar /></ProtectedRoute>}
              />
            <Route 
              path="/to_do_list"   
              element={<ProtectedRoute authState={authState}><To_Do_List /></ProtectedRoute>}
              />
            <Route 
              path="/account" 
              element={<Account />} 
              />
            <Route 
              path="/other_users" 
              element={<ProtectedRoute authState={authState}><Other_Users /></ProtectedRoute>}
              />

            <Route 
              path="*" 
              element={<NotFound />} 
              />
          </Routes>
        </main>

        <footer>
        {location.pathname === '/' && (
          <div
            id="location-placeholder"
            style={{
              border: '2px dashed black',
              padding: '15px',
              marginTop: '20px',
              textAlign: 'center',
              backgroundColor: 'white',
            }}
          >
            <h3>Event Location Placeholder</h3>
            <p>Map or location info will appear here for select events in the future.</p>
            <button disabled>Set Location (API Placeholder)</button>
          </div>
        )}

        <div className="footer-bottom">
          <span className="text-reset">Megan Stone</span>{' '}
          <a href="https://github.com/mstone13/startup">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [authState, setAuthState] = useState(AuthState.Unknown);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.username);
      setAuthState(AuthState.Authenticated);
    } else {
      setAuthState(AuthState.Unauthenticated);
    }
  }, []);


function handleAuthChange(loginUserName, newState) {
    setUserName(loginUserName);
    setAuthState(newState);
    if (newState === AuthState.Unauthenticated) {
      localStorage.removeItem('user');
    }
  }


  return (
    <BrowserRouter>
      <Layout userName={userName} authState={authState} onAuthChange={handleAuthChange} />
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}
