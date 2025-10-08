import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
      <header>
        <h1 className="title">My Planner</h1>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="to_do_list.html">To-Do List</a></li>
            <li><a href="account.html">My Account</a></li>
            <li><a href="other_users.html">Friends</a></li>
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

      <div
        className="days-of-the-week"
        style={{ backgroundColor: 'powderblue' }}
      >
        <button className="prev">&lt;</button>
        <div className="days">
          <div className="day">Mon (Sept 29)</div>
          <div className="day">Tue (Sept 30)</div>
          <div className="day">Wed (Oct 1)</div>
          <div className="day">Thu (Oct 2)</div>
          <div className="day">Fri (Oct 3)</div>
          <div className="day">Sat (Oct 4)</div>
          <div className="day">Sun (Oct 5)</div>
        </div>
        <button className="next">&gt;</button>
      </div>

      <main style={{ backgroundColor: 'powderblue' }}>
        {/* <h2>Today: Wednesday, September 24th</h2> */}

        <div
          className="calendar-container"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Event</th>
                <th>Event</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              {[
                '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM',
                '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
                '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
                '9:00 PM', '10:00 PM'
              ].map((time) => (
                <tr key={time}>
                  <td>{time}</td>
                  <td><input type="text" placeholder="Enter event" /></td>
                  <td><input type="text" placeholder="Enter event" /></td>
                  <td><input type="text" placeholder="Enter event" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="image">
          <img
            src="october-pic.png"
            className="image"
            alt="october"
          />
        </div>
      </main>

      <footer className="bg-dark text-white-50">
        <div className="container-fluid">
          <span className="text-reset">Author Name(s)</span>
          <a
            className="text-reset"
            href="https://github.com/webprogramming260/simon-react"
          >
            Source
          </a>
        </div>
      </footer>
    </div>
  );
}
