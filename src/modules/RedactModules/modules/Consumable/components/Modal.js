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
    width: 700,
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
    width: '45%',
}

const BoxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
}

const ConsumableModal = observer(({ open, onClose }) => {
    const [data, setData] = useState({
        articul: '',
        name: '',
        price: '',
        retail: '',
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
                <Typography variant="h5" component="h2">
                    Добавление Аксессуаров
                </Typography>
                <Box sx={BoxStyle}>
                    <TextField
                        sx={{width:'30%'}}
                        onChange={handleChange}
                        value={data.articul}
                        name='articul'
                        label="Артикул"
                        variant="outlined" />
                    <TextField
                        sx={{width:'65%'}}
                        onChange={handleChange}
                        value={data.name}
                        name='name'
                        label="Наименование"
                        variant="outlined" />
                </Box>
                <Box sx={BoxStyle}>
                    <TextField
                        sx={inputStyle}
                        onChange={handleChange}
                        value={data.price}
                        name='price'
                        label="Цена"
                        variant="outlined" />
                    <TextField
                        sx={inputStyle}
                        onChange={handleChange}
                        value={data.retail}
                        name='retail'
                        label="Розница"
                        variant="outlined" />
                </Box>
                <Button
                    variant="contained"
                    component="label"
                >
                    Загрузить фото
                    <input
                        type="file"
                        hidden
                    />
                </Button>
                <Button sx={{ width: '45%', marginLeft: 'auto', marginRight: 'auto' }} onClick={add} variant="contained">Добавить</Button>
            </Box>
        </Modal>
    );
});

export default ConsumableModal;