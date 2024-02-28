

import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";



const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <li style={{ display: 'flex' , flexDirection:'column' }}>
        <div>
          <h3>{task.name}</h3>
            <div>
                  {task.completed ? <p>Completed</p> : <button onClick={() => onComplete(task.id)}>Complete</button>}
      <button onClick={() => onEdit(task.id)}><MdOutlineModeEditOutline /></button>
      <button onClick={() => onDelete(task.id)}><RiDeleteBin6Line /></button>
            </div>
        </div>
        <div><p>{task.description}</p></div>
   
                <p>Due Date: {task.dueDate}</p>
      
 
    
    </li>
  );
};
 export default TaskItem;
