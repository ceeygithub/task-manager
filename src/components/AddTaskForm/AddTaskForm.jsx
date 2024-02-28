import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import  './AddTaskForm'
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AddTaskForm = ({ onAdd }) => {
//   const history = useHistory();
 const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      dueDate: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Task name is required'),
      description: Yup.string().required('Description is required'),
      dueDate: Yup.date().required('Due date is required').min(new Date(), 'Due date must be in the future'),
    }),
    onSubmit: (values) => {
      const newTask = { ...values, id: Date.now(), completed: false };
      onAdd(newTask);
    //   history.push('/');
    navigate('/');
    },
  });

  return (
    <div className='AddTaskForm '>
      <h1>Add Task</h1>
      <form onSubmit={formik.handleSubmit} >
        <label>
          Task Name:
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}

        <label > 
          Description:
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.description && formik.errors.description && <div>{formik.errors.description}</div>}

        <label>
          Due Date:
          <input
            type="date"
            name="dueDate"
            value={formik.values.dueDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        {formik.touched.dueDate && formik.errors.dueDate && <div>{formik.errors.dueDate}</div>}

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
