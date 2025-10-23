import React, {useState} from 'react';
import './to_do_list.css';

export function To_Do_List() {

  const [lists, setLists] = useState([])
  const [newListName, setNewListName] = useState('');

  function addNewList() {
    if (!newListName.trim()) return;
    const newId = lists.length + 1;
    const newList = { id: newId, title: newListName, tasks: [], newTask: ''};
    setLists([...lists, newList]);
    setNewListName('');
  }

    function removeList(id) {
      setLists(prevLists => prevLists.filter(list => list.id !== id));
    }

    function handleTitleChange(id, newTitle) {
      setLists(prevLists =>
        prevLists.map(list =>
          list.id === id ? { ...list, title: newTitle } : list
        ));}


  function handleTaskInputChange(listId, value) {
    setLists(prevLists =>
      prevLists.map(list =>
        list.id === listId ? { ...list, newTask: value } : list
      ));}

  function addTask(listId) {
    setLists(prevLists =>
      prevLists.map(list => {
        if (list.id === listId && list.newTask.trim()) {
          const newTask = {
            id: Date.now(),
            text: list.newTask.trim(),
            completed: false,
          };
          return { ...list, tasks: [...list.tasks, newTask], newTask: '' };
        }
        return list;
      }));}

    function toggleTask(listId, taskId) {
      setLists(prevLists =>
        prevLists.map(list =>
          list.id === listId
          ? {
            ... list,
            tasks: list.tasks.map(task =>
              task.id === taskId ? { ...task, completed: !task.completed } : task
            ),
          }
          : list
        ));}

    function removeTask(listId, taskId) {
      setLists(prevLists =>
        prevLists.map(list =>
          list.id === listId
            ? { ...list, tasks: list.tasks.filter(task => task.id !== taskId) }
            : list
        )
      );
    }

  return (
    <main>
      <h2>Class To-Do Lists:</h2>

      <div className="options-buttons">
        <div className="addList" onClick={addNewList}>Add List:</div>
        <input
          type="text"
          placeholder="Enter list name..."
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
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
            <div className="add-task">
              <input
                type="text"
                placeholder={`Add a task for ${list.title}`}
                value={list.newTask || ""}
                onChange={(e) => handleTaskInputChange(list.id, e.target.value)}
              />
              <button onClick={()=> addTask(list.id)}>Add</button>
              </div>
              

            <ul className="task-list">
              {list.tasks.map((task) => (
                  <li key={task.id} className={task.completed ? "completed" : ""}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(list.id, task.id)}
                    />
                    <span>{task.text}</span>
                    <button className="remove-task" onClick={() => removeTask(list.id, task.id)}>✕</button>
                  </li>
                ))}
            </ul>


            <button className="remove" onClick={ ()=> removeList(list.id)}>
                Remove List
            </button>
          </div>
        ))}
      </div>
      
    </main>
  );
}