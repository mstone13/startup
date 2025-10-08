import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import { Login } from './login/login.jsx';
import { Account } from './account/account.jsx';
import { Other_Users } from './other_users/other_users.jsx';
import { To_Do_List } from './to_do_list/to_do_list.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1 className="title">My Planner</h1>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/to_do_list">To-Do List</NavLink></li>
              <li><NavLink to="/account">Account</NavLink></li>
              <li><NavLink to="/other_users">Friends</NavLink></li>
            </ul>
          </nav>

          <div id="websocket-placeholder">
            *Notifications / Interuser communication*
          </div>

          <div className="login-box">
            <div>
              <b>LOG IN to save events:</b>
              <input type="text" placeholder="your@email.com" />
              <input type="password" placeholder="password" />
              <button type="submit">Login</button>
              <button type="submit">Create</button>
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/to_do_list" element={<To_Do_List />} />
            <Route path="/account" element={<Account />} />
            <Route path="/other_users" element={<Other_Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer>
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

          <div className="footer-bottom">
            <span className="text-reset">Megan Stone</span>{' '}
            <a href="https://github.com/mstone13/startup">GitHub</a>
          </div>
        </footer>
      </div>
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
