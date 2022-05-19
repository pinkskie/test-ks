import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createPost } from "../store/reducer";

const CreatePost = () => {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const validationSchema = yup.object().shape({
    id: yup.number().required('Field is required'),
    title: yup.string().required('Field is required'),
    description: yup.string().required('Field is required'),
    img: yup.string().required('Field is required'),
  })

  const newTodo = (post) => {
    dispatch(createPost(post))
    navigate('/')
  }
  
  return (
    <Formik
      initialValues={{
        id: posts.length + 1,
        title: '',
        description: '',
        img: '',
        date: new Date().toLocaleDateString(),
      }}
      validationSchema={validationSchema}
      onSubmit={newTodo}
    >
      {({ handleChange, handleBlur, values, handleSubmit, errors, touched, }) => (
        <Form onSubmit={handleSubmit} className="createForm">
          <TextField 
            fullWidth 
            label="Title" 
            name="title" 
            onChange={handleChange} 
            value={values.title} 
            onBlur={handleBlur} 
            error={errors.title && touched.title} 
            helperText={errors.title}
            margin="normal"
          />
          <TextField 
            fullWidth 
            label="Description" 
            name="description" 
            onChange={handleChange} 
            value={values.description} 
            onBlur={handleBlur} 
            error={errors.description && touched.description} 
            helperText={errors.description}
            margin="normal"
          />
          <TextField 
            fullWidth 
            label="Image URL" 
            name="img" 
            onChange={handleChange} 
            value={values.img} 
            onBlur={handleBlur} 
            error={errors.img && touched.img} 
            helperText={errors.img}
            margin="normal"
          />
          <Button variant="contained" type="submit" size="large">Add</Button>
        </Form>
      )}
    </Formik>
  )
}

export default CreatePost;