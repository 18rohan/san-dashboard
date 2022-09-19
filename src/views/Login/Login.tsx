import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import {useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/firebase-config';
import {useForm, Controller} from 'react-hook-form';
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = React.useState('');
  const {control, reset, handleSubmit} = useForm();

  const handleSubmission = async(data:any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((res)=>{
      navigate('/create-order')
      sessionStorage.setItem('Auth Token', res.user.refreshToken)
    })
    .catch((error)=>error.code === 'auth/wrong-password' ?  setError('Invalid Credentials') : setError(error.code));

    console.log(error);
  
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box  sx={{ mt: 1 }}>
            <Box mb={3} mt={3}>
            <Controller control={control} name="email" defaultValue="" render={({field})=>(
              <TextField
              fullWidth
              id="email"
              label="Email Address"
              {...field}
            />
            )}
            rules={{required:true}}
            />
            </Box>
            <Controller control={control} name="password" defaultValue={""} render={({field})=>(
              <TextField
              fullWidth
              label="Password"
              type="password"
              id="password"
              {...field}
            />
            )}
            rules={{required:true}}
            />
            <p style={{color:'red', fontWeight:'500'}}>{error}</p>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(handleSubmission)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}