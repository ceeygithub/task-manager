import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
