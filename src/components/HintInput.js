import React from "react";
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel'

const HintInput = ({ label, change, keyName, value, end }) => {
    const [initialVal, setinitial] = React.useState(value);
    const HandleChange = (e) => {
        console.log(e.target.value)
        change(keyName, e.target.value);
    }
    return (
        <FormControl variant="outlined">
            <InputLabel size='small'>{label}</InputLabel>
            <OutlinedInput
                size='small'
                autoComplete="off"
                onBlur={HandleChange}
                onChange={(e)=>setinitial(e.target.value)}
                value={initialVal}
                endAdornment={
                    <InputAdornment position="end">{end}</InputAdornment>
                }
                label={label}
            />
        </FormControl>
    );
}

export default HintInput;
