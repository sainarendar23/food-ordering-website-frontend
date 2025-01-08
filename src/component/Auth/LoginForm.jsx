import { Password } from '@mui/icons-material'
import { Button, TextField, Typography } from '@mui/material'
import { Formik,Form, Field } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues ={
    email:"",
    Password:""
}


const LoginForm = () => {
    const navigate=useNavigate()
    const handleSubmit=()=>{

    }

  return (
    <div>
        <Typography varient = 'h5' className='text-center'>
            Login
        </Typography>
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
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
                type="Password"
                name="password"
                label="Password"
                fullWidth
                varient="outlined"
                margin="normal"
                />

                <Button onClick={() => navigate("/Home")} sx={{mt:1,padding: "1rem"}} fullWidth type='submit' varient='contained'> Login</Button>
            </Form>

            
        </Formik>

        <Typography varient ="body2" align="center" sx={{mt:1}}>Dont have account
            <Button size='small' onClick={()=>navigate("/account/register")}>Register</Button>
        </Typography>

    </div>
  )
}

export default LoginForm