

import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";



const TaskItem = ({ task, onEdit, onDelete, onComplete }) => {
  return (
    <li >
        <div>
          <h3>{task.name}</h3>
            <div >
                  {task.completed ? <p>Completed</p> : <button style={{marginRight:'10px'  }} onClick={() => onComplete(task.id)}><MdFileDownloadDone /></button>}
      <button  style={{marginRight:'10px'  }}  onClick={() => onEdit(task.id)}><MdOutlineModeEditOutline /></button>
      <button onClick={() => onDelete(task.id)}><RiDeleteBin6Line /></button>
            </div>
        </div>
        <div style={{ maxWidth: '80%' , flexDirection:'column' }}>
            <p>{task.description}</p>
         <p>Due Date: {task.dueDate}</p>
        
        </div>
   
               
      
 
    
    </li>
  );
};
 export default TaskItem;
