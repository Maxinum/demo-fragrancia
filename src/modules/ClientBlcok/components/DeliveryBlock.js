import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import '../style.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Context } from "../../../index";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const DeliveryBlock = observer(() => {

    const { client } = useContext(Context);
    const data = client.delivery
    return (
        <FormControl fullWidth>
            <InputLabel id="del-label">Доставка</InputLabel>
            <Select
                sx={{ width: '90%' }}
                size='small'
                variant='standard'
                labelId='del-label'
            >
                {data.map((row, index) => (
                    <MenuItem key={index} value={row.id}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            {<img
                                width="20"
                                src={`https://app.fragrancia.asia${row.expeditor_type.link}`}
                                alt={row.expeditor_type.expeditor_type}
                            />}{row.label}
                        </div> </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
})

export default DeliveryBlock;
