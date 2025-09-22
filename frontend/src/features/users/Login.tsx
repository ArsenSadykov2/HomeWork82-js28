import {NavLink, useNavigate} from "react-router-dom";
import {Avatar, Box, Button, Link, Stack, TextField, Typography} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {selectRegisterError} from "./usersSlice.ts";
import {type ChangeEvent, type FormEvent, useState} from "react";
import type {LoginMutation} from "../../types";
import {register} from "./usersThunks.ts";

const Login = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector(selectRegisterError);
    const navigate = useNavigate();

    const [state, setState] = useState<LoginMutation>({
        username: '',
        password: '',
    });

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name]: value}));
    };

    const onSubmitForm = async (e: FormEvent) => {
        e.preventDefault();

        try{
            await dispatch(register(state)).unwrap();
            navigate("/");
        } catch (e) {
            // error  message
        }

    };

    return (
        <Box sx={{marginTop: 8, display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOpenIcon/>
            </Avatar>
            <Typography component={'h1'} variant={'h5'}>
                Login In
            </Typography>
            <Box component={'form'} onSubmit={onSubmitForm} sx={{my: 3, maxWidth: '400px', width: '100%'}}>
                <Stack spacing={2}>
                    <TextField
                        label="Username"
                        name="username"
                        value={state.username}
                        onChange={inputChangeHandler}
                        autoComplete="current-username"
                    />
                    <TextField
                        type="password"
                        label="Password"
                        name="password"
                        value={state.password}
                        onChange={inputChangeHandler}
                        autoComplete="current-password"
                    />
                    <Button
                        type={'submit'}
                        fullWidth
                        variant="contained"
                        sx={{mb: 2}}
                    >
                        Login In
                    </Button>
                </Stack>
            </Box>
            <Link component={NavLink} to={'/register'}>Dont Have an account yet? Register here</Link>
        </Box>
    );
};

export default Login;