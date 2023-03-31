import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

const FilterSelect = (props) => {
    const [selectedValue, setSelectedValue] = React.useState("");

    const handleClear = () => {
        setSelectedValue("");
    };
    
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={props.name}
                onChange={handleChange}
                value={selectedValue}
                endAdornment={
                    selectedValue ? (
                        <IconButton onClick={handleClear}>
                            <ClearIcon />
                        </IconButton>
                    ) : null
                }
            >
                {props.options.map((value, index) => {
                    return <MenuItem key={index} value={value.id}>{value.value}</MenuItem>
                })}
            </Select>
        </FormControl>
    );
};

export default FilterSelect 