import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import React from "react";

export default function SignUp() {

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('first Name is required'),
    lastName: Yup.string().required('last Name is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password : Yup.string().required("password is required"),

})
 
 
  const formik = useFormik({
    initialValues : {
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      mobile : ""
    },
    onSubmit : values => {
      alert(JSON.stringify(values , null , 2))
    }
  })
  return (

    <>
    
    <Container component="main" maxWidth="sm">
      <Box
          sx={{  
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="LastName"
              name="lastName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* create link to login page */}
            <Grid container>
              <Grid item xs>
                <Link to="/login" variant="body2" style = {{
                  textDecoration : "none"
                }}> 
                  Already have an account? <span style = {{
                    color : "blue"
                  }}>
                     Sign In
                    </span>  
                </Link>
              </Grid>
            </Grid>
      </Box>  
        </Box>
      </Container>
    </>
  );
}