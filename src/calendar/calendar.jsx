import React from 'react';

export function Calendar() {
  return (
    <div className="container-fluid bg-secondary text-center">
      <div className="days-of-the-week" style={{ backgroundColor: 'powderblue' }}>
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

      <div className="calendar-container" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
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
              '6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM',
              '2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM'
            ].map(time => (
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
      

    </div>
  );
}