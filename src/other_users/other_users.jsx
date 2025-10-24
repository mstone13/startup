import React from 'react';
import './other_users.css';
import { Navigate, useNavigate } from 'react-router-dom';

export function Other_Users() {
const navigate = useNavigate();

function toCalendar() {
  navigate('/');
}

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
            <th>Username</th>
            <th>Name</th>
            <th>Events with user</th>
            <th>See Events</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Username1</td>
            <td>James</td>
            <td>1</td>
            <td>
              <button onClick={toCalendar}>Event(s)</button>
            </td>
          </tr>
          <tr>
            <td>Username2</td>
            <td>Alex</td>
            <td>3</td>
            <td>
              <button onClick={toCalendar}>Event(s)</button>
            </td>
          </tr>
          <tr>
            <td>Username3</td>
            <td>Miranda</td>
            <td>0</td>
            <td>
              <button onClick={toCalendar}>Event(s)</button>
            </td>
          </tr>
        </tbody>
    </table>

  </main>
  );
}