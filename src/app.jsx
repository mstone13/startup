import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes, Navigate, useNavigate, useLocation } from 'react-router-dom';

import { Calendar } from './calendar/calendar.jsx';
import { Account } from './account/account.jsx';
import { Other_Users } from './other_users/other_users.jsx';
import { To_Do_List } from './to_do_list/to_do_list.jsx';
import { Login } from './login/login.jsx';

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/login');
  }

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

function Layout() {
  const location = useLocation();

  return (
    <div>
        <Header />

        <main>
          <Routes>
            <Route path="/login" element={<Login />}></Route>

            <Route path="/" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
            <Route path="/to_do_list" element={<ProtectedRoute><To_Do_List /></ProtectedRoute>} />
            <Route path="/account" element={<Account />}/>
            <Route path="/other_users" element={<ProtectedRoute><Other_Users /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
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
  return (
    <BrowserRouter>
      <Layout />
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
