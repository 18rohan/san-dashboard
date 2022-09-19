import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {auth} from '../../firebase/firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useForm, Controller } from "react-hook-form";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const { reset, control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: any) => console.log(data);
  const handleSubmission = async (data: any) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response)=>{
      navigate('/create-order')
      sessionStorage.setItem('Auth Token',response.user.refreshToken)
    })
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
        width="100%"
          sx={{ 
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          
            <Grid container spacing={2} sx={{marginTop:'20px', width:'100%'}}>
              <Grid item xs={12} sm={6}>
                <Controller
                  control={control}
                  name="firstName"
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="outlined-required"
                      label="First Name"
                      fullWidth
                    />
                  )}
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name={"lastName"}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      id="lastName"
                      label="Last Name"
                      {...field}
                      fullWidth
                    />
                  )}
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Controller
                  name={"email"}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      id="email"
                      label="Email Address"
                      {...field}
                      fullWidth
                    />
                  )}
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name={"password"}
                  control={control}
                  defaultValue=""

                  render={({ field }) => (
                    <TextField
                      label="Password"
                      id="password"
                      type="password"
                      {...field}
                      fullWidth
                    />
                  )}
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={12}>
                {/* <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                //   label="I want to receive inspiration, marketing promotions and updates via email."
                /> */}
              </Grid>
            </Grid>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit(handleSubmission)}
          >
            Sign Up
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
