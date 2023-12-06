import React, { useState } from 'react';
import TaskList from './TaskList';
import './static/Styles.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  const addTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, inputTask]);
      setInputTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>To-do</h1>
      <div>
        <input
          type="text"
          value={inputTask}
          placeholder="What's on your mind today ?"
          onChange={(e) => setInputTask(e.target.value)}
        />
        <button id='accept' onClick={addTask}>Add Task  <i class="fa-solid fa-plus" style={{color: "#ffffff;"}}></i></button>
      </div>
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default TodoApp;
