import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// import { useParams, useHistory } from 'react-router-dom';
import { useParams, useNavigate  } from 'react-router-dom';

const EditTaskForm = ({ onEdit, tasks }) => {
//   const history = useHistory();
 const navigate = useNavigate();
  const { taskId } = useParams();

  const taskToEdit = tasks.find((task) => task.id === parseInt(taskId, 10));

  const formik = useFormik({
    initialValues: {
      name: taskToEdit ? taskToEdit.name : '',
      description: taskToEdit ? taskToEdit.description : '',
      dueDate: taskToEdit ? taskToEdit.dueDate : '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Task name is required'),
      description: Yup.string().required('Description is required'),
      dueDate: Yup.date().required('Due date is required').min(new Date(), 'Due date must be in the future'),
    }),
    onSubmit: (values) => {
      onEdit(taskId, values);
    //   history.push('/');
navigate('/');

    },
  });

  return (
    <div>
      <h1>Edit Task</h1>
      <form onSubmit={formik.handleSubmit}>
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

        <label>
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

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditTaskForm;
