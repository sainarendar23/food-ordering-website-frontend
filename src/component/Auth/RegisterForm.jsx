import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const initialValues ={
    fullName:"",
    email:"",
    Password:"",
    role:""
  }
const RegisterForm = () => {
    const navigate=useNavigate()
    const handleSubmit=(values)=>{
        console.log("form value" , values)
    }
  return (
    <div>

        <Typography varient = 'h5' className='text-center'>
            Register
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
            <Field 
                as={TextField}
                name="fullname"
                label="name"
                fullWidth
                varient="outlined"
                margin="normal"
                />
            <Field 
                as={TextField}
                name="email"
                label="email"
                fullWidth
                varient="outlined"
                margin="normal"
                />
            <Field
                as={TextField}
                name="password"
                label="Password"
                fullWidth
                varient="outlined"
                margin="normal"
                type="Password"
                />
                <FormControl fullWidth margin="normal">
  <InputLabel id="role-simple-select-label">Role</InputLabel>
  <Field
  fullWidth
  margin="normal"
    as={Select}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    name
    // valu='role={age}
    label="Role"
    // onChange={handleChange}
  >
    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
  </Field>
</FormControl>
                <Button sx={{mt:2,padding: "1rem"}} fullWidth type='submit' varient='contained'> Register</Button>
            </Form>

            
        </Formik>

        <Typography varient ="body2" align="center" sx={{mt:3}}> have account already?
            <Button size='small' onClick={()=>navigate("/account/login")}>Login</Button>
        </Typography>
    </div>
  )
}

export default RegisterForm