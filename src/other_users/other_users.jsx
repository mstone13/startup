import React from 'react';
import './other_users.css';

export function Other_Users() {
  return (
   <main>
      <div className="searchbar">
        <b>Search for other users:</b>
        <form>
          <input type="text" placeholder="Search..." name="search"/>
          <button type="submit">Go</button>
        </form> 
      </div>

    <table>
        <thead>
          <tr>
            <th style={{ border: '2px solid black' }}>Username</th>
            <th style={{ border: '2px solid black' }}>Name</th>
            <th style={{ border: '2px solid black' }}>Events with user</th>
            <th style={{ border: '2px solid black' }}>See Events</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '2px solid black' }}>Username1</td>
            <td style={{ border: '2px solid black' }}>James</td>
            <td style={{ border: '2px solid black' }}>1</td>
            <td style={{ border: '2px solid black' }}>
              <button>Event(s)</button>
            </td>
          </tr>
          <tr>
            <td style={{ border: '2px solid black' }}>Username2</td>
            <td style={{ border: '2px solid black' }}>Alex</td>
            <td style={{ border: '2px solid black' }}>3</td>
            <td style={{ border: '2px solid black' }}>
              <button>Event(s)</button>
            </td>
          </tr>
          <tr>
            <td style={{ border: '2px solid black' }}>Username3</td>
            <td style={{ border: '2px solid black' }}>Miranda</td>
            <td style={{ border: '2px solid black' }}>0</td>
            <td style={{ border: '2px solid black' }}>
              <button>Event(s)</button>
            </td>
          </tr>
        </tbody>
    </table>

  </main>
  );
}