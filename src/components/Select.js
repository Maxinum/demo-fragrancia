import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MUISelect = ({ value, name, keyName, data, change }) => {
    const selected = data.filter(data => data.value === value);
    const selectedValue = selected.length === 0 ? '' : selected[0].id;

    const handleChange = (e) => {
        console.log(keyName)
        const selectedOption = data.find(option => option.id === e.target.value);
        change(keyName, selectedOption.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel size='small'>{name}</InputLabel>
            <Select
                size='small'
                value={selectedValue}
                label={name}
                name={name}
                onChange={handleChange}
            >
                {data.map((value, i) => {
                    return <MenuItem value={value.id} key={i} name={value.value}>{value.value}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default MUISelect;