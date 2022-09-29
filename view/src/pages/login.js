import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import './login.css';

const Login = (props) => {
    //console.log(props);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errrors, setErrrors] = useState([]);
    const [loading, setLoading] = useState(false);

    /* TODO: como pegar erros?
        useEffect(() => {
            if (props.UI.errors) {
                setErrrors(props.UI.errors);
            }
        }, [props.UI.errors])
    */
    const handleChange = (event) => { // TODO: como melhorar isso?
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        }
        if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
        if (event.target.name === 'errrors') {
            setErrrors(event.target.value);
        }
        if (event.target.name === 'loading') {
            setLoading(event.target.value);
        }
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        setLoading(true);
        const userData = {
            email: email,
            password: password
        };
        axios
            .post('/login', userData)
            .then((response) => {
                localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
                setLoading(false);
                //history.push('/');
                //this.props.history.push('/');
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                setErrrors(error.response.data);
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="paper">
                <Avatar className="avatar">
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className="form" noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        helperText={errrors.email}
                        error={errrors.email ? true : false}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={errrors.password}
                        error={errrors.password ? true : false}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="submit}"
                        onClick={handleSubmit}
                        disabled={loading || !email || !password}
                    >
                        Sign In
                        {loading && <CircularProgress size={30} className="progess" />}
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    {errrors.general && (
                        <Typography variant="body2" className="customError">
                            {errrors.general}
                        </Typography>
                    )}
                </form>
            </div>
        </Container>
    );

}

export default Login;