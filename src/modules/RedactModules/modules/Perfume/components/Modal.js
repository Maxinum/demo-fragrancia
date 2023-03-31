import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';
import Slider from '@mui/material/Slider';
// import { addUser } from '../api';

const style = {
    position: 'absolute',
    justifyContent: 'space-around',
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

const PerfumeModal = observer(({ open, onClose }) => {
    const [data, setData] = useState({
        articul: '',
        name: '',
        priceMl: '',
        price250: '',
        price500: '',
        price1000: '',
        special: '',
        retail: '',
        share1: '',
        share2: '',
    });

    function valuetext(value) {
        return `${value}°C`;
    }

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
                <Typography style={{ textAlign: 'left' }} variant="h5" component="h2">
                    Добавление ароматов
                </Typography>
                <Box sx={{ display: 'flex',justifyContent: 'space-between' }}>
                    <TextField
                        sx={{ width: '30%' }}
                        onChange={handleChange}
                        value={data.articul}
                        name='articul'
                        label="Артикул"
                        variant="outlined" />
                    <TextField
                        sx={{ width: '65%' }}
                        onChange={handleChange}
                        value={data.name}
                        name='name'
                        label="Наименование"
                        variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex',justifyContent: 'space-between' }}>
                    <TextField
                        sx={{ width: '30%' }}
                        onChange={handleChange}
                        value={data.priceMl}
                        name='priceMl'
                        label="Цена мл"
                        variant="outlined" />
                    <TextField
                        sx={{ width: '30%' }}
                        onChange={handleChange}
                        value={data.price250}
                        name='price250'
                        label="Цена 250"
                        variant="outlined" />
                    <TextField
                        sx={{ width: '30%' }}
                        onChange={handleChange}
                        value={data.price500}
                        name='price500'
                        label="Цена 500"
                        variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex',justifyContent: 'space-between' }}>
                    <TextField
                        sx={{ width: '30%' }}
                        onChange={handleChange}
                        value={data.price1000}
                        name='price1000'
                        label="Цена 1000"
                        variant="outlined" />
                    <TextField
                        sx={{ width: '30%' }}
                        onChange={handleChange}
                        value={data.special}
                        name='special'
                        label="Спеццена"
                        variant="outlined" />
                    <TextField
                        sx={{ width: '30%' }}
                        onChange={handleChange}
                        value={data.retail}
                        name='retail'
                        label="Розница"
                        variant="outlined" />
                </Box>
                <Box>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        getAriaValueText={valuetext}
                        valueLabelDisplay="auto"
                        step={5}
                        marks
                        min={10}
                        max={100}
                    />
                </Box>
                <Button sx={{ width: '30%', marginLeft:'auto',marginRight:'auto' }} onClick={add} variant="contained">Добавить</Button>
            </Box>
        </Modal>
    );
});

export default PerfumeModal;