import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BsShieldLockFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
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
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = React.useState("");
  const { control,handleSubmit,formState:{errors} } = useForm({mode:'onBlur',reValidateMode:'onChange'});

  const handleSubmission = async (data: any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        navigate("/create-order");
        sessionStorage.setItem("Auth Token", res.user.refreshToken);
      })
      .catch((error) =>{
        
        switch(error.code){
          case 'auth/invalid-email':
            setError('Invalid credentials');
            break;
          case 'auth/invalid-password':
            setError('Invalid Credentials');
            break;
        }
      }
        
        // setError(error?.errors?.errors[0])
      );

    
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Box display="flex" flexDirection="row" width="100%" minHeight="80vh">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="60%"
          height="100vh"
          style={{ overflow: "hidden" }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/login-bg.jpeg"}
            alt="industry"
          />
        </Box>
        <Box
          display="flex"
          width="50%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <BsShieldLockFill />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }} width="60%">
            <Box mb={3} mt={3}>
              <Controller
                control={control}
                name="email"
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    fullWidth
                    id="email"
                    label="Email Address"
                    error={!!errors.email}
                    {...field}
                  />
                )}
                rules={{ required: true, minLength:3 }}
              />
              {/* <Typography variant="inherit" color="red">
                {errors.email?.message}
              </Typography> */}
            </Box>
            <Controller
              control={control}
              name="password"
              defaultValue={""}
              render={({ field }) => (
                <TextField
                  fullWidth
                  error={!!errors.password}
                  label="Password"
                  type="password"
                  id="password"
                  {...field}
                />
              )}
              rules={{ required: true, minLength:4 }}
            />


            
            
            {errors.password && <Typography style={{ color: "red", fontWeight: "500" }}>{errors.password.message}</Typography>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {error && <Typography variant="inherit" color="red">{error}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "black",
                fontWeight: "bold",
                borderRadius: "8px",
              }}
              onClick={handleSubmit(handleSubmission)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 2}} /> */}
    </ThemeProvider>
  );
}
