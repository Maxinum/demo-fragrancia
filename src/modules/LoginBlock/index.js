import React, { useContext } from 'react';
import './style.css'
import AuthBlock from './components/AuthBlock';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const LoginBlock = () => {
    return (
        <div className='container'>
            <AuthBlock />
        </div >
    )
}

export default LoginBlock;
