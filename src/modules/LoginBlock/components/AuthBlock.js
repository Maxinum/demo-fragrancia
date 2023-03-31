import React, { useState, useContext } from 'react';
import '../style.css'
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Login } from '../api';
import { Context } from '../../../index';
import Alert from '@mui/material/Alert';
import { MAIN_ROUTE } from '../../../app/utils/consts';

const AuthBlock = () => {
    const { user } = useContext(Context);
    const [open, setOpen] = useContext('none');
    const [alertTitle, setTitle] = useContext('')
    const [data, setData] = useState({
        email: '',
        pass: '',
    });
    const navigate = useNavigate()
    const add = () => {
        Login(data).then(data => {
            if (typeof data === 'string') {
                setTitle(data);
                setOpen('block');
            } else{
                user.setUser(data)
                user.setIsAuth(true)
                navigate(MAIN_ROUTE)
            }
        })
    }

    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    return (
        <Box
            component="form"
            className='Box'
            noValidate
            autoComplete="off"
        >
            <h2>Авторизация</h2>
            <Alert
                sx={{ display: open}}
                variant="outlined"
                severity="error">
                {alertTitle}
            </Alert>
            <TextField
                className='input'
                label="e-mail"
                variant="filled"
                name='email'
                onChange={handleChange}
            />
            <TextField
                className='input'
                label="Пароль"
                name='pass'
                variant="filled"
                onChange={handleChange}
            />
            <Button variant="contained" onClick={add}>Отправить</Button>
        </Box >
    )
}

export default AuthBlock;
