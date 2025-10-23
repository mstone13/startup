import React from 'react';
import './calendar.css'
import { useState } from 'react';

export function Calendar() {
  const [selectedDay, setSelectedDay] = useState(null)
  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

  function handleDay(day) {
    setSelectedDay(day);
  }

  return (
    <div className="calendar-wrapper">
      <div className="days-of-the-week">
        <div className="days">
          {daysOfWeek.map(day => (
            <div
              key={day}
              className={`day ${selectedDay === day ? 'selected' : ''}`}
              onClick={() => handleDay(day)}
              >
                {day}
                </div>
              ))}
          </div>
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