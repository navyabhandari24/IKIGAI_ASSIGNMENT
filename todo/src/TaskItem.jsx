import React from 'react';

const TaskItem = ({ index, task, removeTask }) => {
  return (
    <li>
      {task}
      <button id='remove' onClick={() => removeTask(index)}>Remove <i class="fa-solid fa-trash" style={{color: "#ffffff"}}></i></button>
    </li>
  );
};

export default TaskItem;
