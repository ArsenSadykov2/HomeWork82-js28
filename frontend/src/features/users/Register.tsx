import {type ChangeEvent, type FormEvent, useState} from "react";
import type {RegisterMutation} from "../../types";
import {Avatar, Box, Button, Link, Stack, TextField, Typography} from "@mui/material";
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import {NavLink} from "react-router-dom";

const Register = () => {
    const [state, setState] = useState<RegisterMutation>({
        username: '',
        password: '',
    });

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        const [name, value] = e.target.value;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <Box sx={{marginTop: 8, display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlineIcon/>
            </Avatar>
            <Typography component={'h1'} variant={'h5'}>
                Sign Up
            </Typography>
            <Box component={'form'} onSubmit={onSubmitForm} sx={{my: 3, maxWidth: '400px', width: '100%'}}>
                <Stack spacing={2}>
                    <TextField
                        required
                        label="Username"
                        name="username"
                        value={state.username}
                        onChange={inputChangeHandler}
                        autoComplete="new-username"
                    />
                    <TextField
                        type="password"
                        required
                        label="Password"
                        name="password"
                        value={state.password}
                        onChange={inputChangeHandler}
                        autoComplete="new-password"
                    />
                    <Button
                        type={'submit'}
                        fullWidth
                        variant="contained"
                        sx={{mb: 2}}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Box>
            <Link component={NavLink} to={'/login'}>Already Have an account? Sign In</Link>
        </Box>
    );
};

export default Register;