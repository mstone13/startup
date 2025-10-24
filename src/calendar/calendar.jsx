import React from 'react';
import './calendar.css'
import { useState } from 'react';

export function Calendar() {
  const [selectedDay, setSelectedDay] = useState(null)
  const [events, setEvents] = useState({});
  const [inputValues, setInputValues] = useState({});

  const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  const times = [
              '6:00 AM','7:00 AM','8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM','1:00 PM',
              '2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM','10:00 PM'
            ];

  function addEvent(time) {
    if (!selectedDay) {
      alert('Select a day first!');
      return;
    }

    const newEvent = inputValues[time]?.trim();
    if (!newEvent.trim()) return;

    setEvents(prev => {
      const updated = { ...prev };
      if (!updated[selectedDay]) updated[selectedDay] = {};
      if (!updated[selectedDay][time]) updated[selectedDay][time] = [];
      updated[selectedDay][time].push(newEvent.trim());
      return updated;
    });

    setInputValues(prev => ({ ...prev, [time]: ''}))
  }

  function deleteEvent(day, time, index) {
    setEvents(prev => {
      const updated = { ...prev };
      updated[day][time].splice(index, 1);
      if (updated[day][time].length === 0) delete updated[day][time];
      return updated;
    });
  }


  return (
    <div className="calendar-wrapper">
      <div className="days-of-the-week">
        <div className="days">
          {daysOfWeek.map(day => (
            <div
              key={day}
              className={`day ${selectedDay === day ? 'selected' : ''}`}
              onClick={() => setSelectedDay(day)}
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
              <th>Shared Events</th>
            </tr>
          </thead>
          <tbody>

            {times.map(time => (
              <tr key={time}>
                <td>{time}</td>
                <td className='event-cell'>
                  <ul className="event-list">
                    {events[selectedDay]?.[time]?.map((event, index) => (
                      <li key={index} className="event-item">
                        {event}
                        <button
                          className="delete-btn"
                          onClick={() => deleteEvent(selectedDay, time, index)}
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>

                {selectedDay && (
                  <div className="add-event">
                    <input
                      type="text"
                      placeholder="Add event..."
                      value={inputValues[time] || ''}
                      onChange={e =>
                          setInputValues(prev => ({
                            ...prev,
                            [time]: e.target.value
                          }))
                        }
                      onKeyDown={e => e.key === 'Enter' && addEvent(time)}
                    />
                    <button onClick={() => addEvent(time)}>Add</button>
                  </div>
                )}
                  
                </td>                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}