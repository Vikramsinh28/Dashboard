import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    alert("Login Successful" , JSON.stringify({
        username: data.get("username"),
        password: data.get("password"),
    }) );
    navigate("/");
  };

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
            Login 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link to="/forgotpassword" variant="body2" style = {{
                  textDecoration: "none",
                  color: "red"
                }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" variant="body2" style = {{
                  textDecoration: "none",
                  color: "inherit"
                }}>
                  Don't have an account? <span style = {{
                    color: "red"
                  }}>
                    Sign Up
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