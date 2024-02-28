import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from '../TaskList/TaskList';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import EditTaskForm from '../EditTaskForm/EditTaskForm';

const TaskManagerApp = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever the tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const markTaskAsComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} onComplete={markTaskAsComplete} />} />
        <Route path="/add-task" element={<AddTaskForm onAdd={addTask} />} />
        <Route path="/edit-task/:taskId" element={<EditTaskForm onEdit={editTask} tasks={tasks} />} />
      </Routes>
    </Router>
    </>
  );
};

export default TaskManagerApp;
