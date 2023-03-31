import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
// import { addUser } from '../api';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 550,
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const inputStyle = {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
}

const ConsumableModal = observer(({ open, onClose }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        pass: '',
        pass2: '',
        role: 'manager',
    });

    const add = () => {
    }

    const handleChange = event => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography style={{ textAlign: 'center' }} variant="h5" component="h2">
                    Флаконы
                </Typography>
                <TextField sx={inputStyle} onChange={handleChange} value={data.name} name='name' label="Имя" variant="outlined" />
                <TextField sx={inputStyle} onChange={handleChange} value={data.email} name='email' label="email" variant="outlined" />
                <TextField sx={inputStyle} onChange={handleChange} value={data.pass} name='pass' label="Пароль" variant="outlined" />
                <TextField sx={inputStyle} onChange={handleChange} value={data.pass2} name='pass2' label="Подтвердите пароль" variant="outlined" />
                <FormControl sx={inputStyle}>
                    <InputLabel>Роль</InputLabel>
                    <Select
                        name='role'
                        value={data.role}
                        label="Роль"
                        onChange={handleChange}
                    >
                        <MenuItem value={'manager'}>Менеджер</MenuItem>
                        <MenuItem value={'admin'}>Админ</MenuItem>
                    </Select>
                </FormControl>
                <Button sx={inputStyle} onClick={add} variant="contained">Добавить</Button>
            </Box>
        </Modal>
    );
});

export default ConsumableModal;