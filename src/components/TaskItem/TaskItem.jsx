// import React from 'react';

// const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
//   return (
//     <li>
//       <h3>{task.name}</h3>
//       <p>{task.description}</p>
//       <p>Due Date: {task.dueDate}</p>
//       {task.completed ? <p>Completed</p> : <button onClick={() => onComplete(task.id)}>Complete</button>}
//       <button onClick={() => onEdit(task.id)}>Edit</button>
//       <button onClick={() => onDelete(task.id)}>Delete</button>
//     </li>
//   );
// };

// export default TaskItem;

import React from 'react';
const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <li>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      {task.completed ? <p>Completed</p> : <button onClick={() => onComplete(task.id)}>Complete</button>}
      <button onClick={() => onEdit(task.id)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};
 export default TaskItem;
