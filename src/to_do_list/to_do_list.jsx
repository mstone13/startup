import React from 'react';
import './to_do_list.css';

export function To_Do_List() {
  return (
    <main>
      <h2>Class To-Do Lists:</h2>

      <div className="todo-container">
        <div className="todo-list">
          <input type="text" defaultValue="Class 1" />
          <textarea placeholder="Enter tasks for Class 1" />
        </div>

        <div className="todo-list">
          <input type="text" defaultValue="Class 2" />
          <textarea placeholder="Enter tasks for Class 2" />
        </div>

        <div className="todo-list">
          <input type="text" defaultValue="Class 3" />
          <textarea placeholder="Enter tasks for Class 3" />
        </div>

        <div className="todo-list">
          <input type="text" defaultValue="Class 4" />
          <textarea placeholder="Enter tasks for Class 4" />
        </div>
      </div>
    </main>
  );
}