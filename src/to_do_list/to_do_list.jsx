import React, {useState} from 'react';
import './to_do_list.css';

export function To_Do_List() {

  const [lists, setLists] = useState([
    { id: 1, title: 'Class 1', tasks: ''}
  ])
  function addNewList() {
    const listName = window.prompt('Enter a name for new list:')
    if (!listName) return;

    const newId = lists.length + 1;
    const newList = {id: newId, title: listName, tasks: ''};
    setLists([...lists, newList]);
  }

    function handleTitleChange(id, newTitle) {
    setLists(prevLists =>
      prevLists.map(list =>
        list.id === id ? { ...list, title: newTitle } : list
      )
    );
  }

  function handleTasksChange(id, newTasks) {
    setLists(prevLists =>
      prevLists.map(list =>
        list.id === id ? { ...list, tasks: newTasks } : list
      )
    );
  }


  return (
    <main>
      <h2>Class To-Do Lists:</h2>

      <div className="options-buttons">
        <div className="addList" onClick={addNewList}>Add List</div>
        <div className="numberOfLists">Lists: {lists.length}</div>
        <div className="thirdButton">Third :D</div>
      </div>

      <div className="todo-container">
        {lists.map(list => (
          <div className="todo-list" key={list.id}>
            <input
              type="text"
              value={list.title}
              onChange={(e) => handleTitleChange(list.id, e.target.value)}
            />
            <textarea
              placeholder={`Enter tasks for ${list.title}`}
              value={list.tasks}
              onChange={(e) => handleTasksChange(list.id, e.target.value)}
            />
          </div>
        ))}
      </div>
      
    </main>
  );
}