// import React from 'react';
// import TaskItem from '../TaskItem/TaskItem'

// const TaskList = ({ tasks, onEdit, onDelete, onComplete }) => {
//   return (
//     <div>
//       <h1>Task List</h1>
//       <ul > 
//         {tasks.map((task) => (
 
//    <TaskItem
//             key={task.id}
//             task={task}
//             onEdit={onEdit}
//             onDelete={onDelete}
//             onComplete={onComplete}
//           />
   
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TaskList;

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
      <section style={{ background: '#CAD9F6' }} >
        <h2>To do</h2>
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
      <section style={{ background: '#FFF6EB' }}>
        <h2>In progress</h2>
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
      <section style={{ background: '#83C38C' }}>
        <h2>Done</h2>
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
