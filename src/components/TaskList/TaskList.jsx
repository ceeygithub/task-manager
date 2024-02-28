

import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
  // Categorize tasks into progress, ongoing, and done
  const progressTasks = tasks.filter((task) => !task.completed);
  const doneTasks = tasks.filter((task) => task.completed);

  return (
   <div  style={{ display: 'flex', flexDirection: 'column', background: '#fff', borderRadius: '5px 5px 0 0' }}>
     <h1>Task List</h1>
        <div style={{ display: 'flex', width: '100%' }}>

      {/* Progress Section */}
      <section  >
        <h2 style={{ background: '#CAD9F6' }}>To do</h2>
        <ul className='tasksSection'>
          {progressTasks.map((task) => (
            <li key={task.id}>
              <TaskItem
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
                onComplete={onComplete}
              />
            </li>
          ))}
        </ul >
      </section>

      {/* Ongoing Section (Tasks not completed yet) */}
      <section >
        <h2 style={{ background: '#CC7000' }}>In progress</h2>
        <ul className='tasksSection'>
          {progressTasks.map((task) => (
            <li key={task.id}>
              <TaskItem
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
                onComplete={onComplete}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Done Section */}
      <section >
        <h2  style={{ background: '#83C38C' }}>Done</h2>
        <ul  className='tasksSection'>
          {doneTasks.map((task) => (
            <li key={task.id}>
              <TaskItem
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
                onComplete={onComplete}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
   </div>
   

  );
};

export default TaskList;
