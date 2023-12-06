
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, removeTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} index={index} task={task} removeTask={removeTask} />
      ))}
    </ul>
  );
};

export default TaskList;
