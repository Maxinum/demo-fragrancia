import React, { FunctionComponent, useState } from "react";
import {
    FormControl,
    InputAdornment,
    TextField,
    createStyles
} from '@mui/material';
import {makeStyles} from '@mui/styles'
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const useStyles = makeStyles(() => {
    return createStyles({
        search: {
            margin: "0",
            height: "250px",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
        }
    });
});

const TypeSearch = () => {
    const { search } = useStyles();

    const [showClearIcon, setShowClearIcon] = useState("none");
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value)
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
    };

    const handleClick = () => {
        setValue('');
        setShowClearIcon('none')
    };

    return (
        <FormControl className={search}>
            <TextField
                size="small"
                variant="outlined"
                value={value}
                style={{width:'450px'}}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment
                            position="end"
                            style={{ display: showClearIcon, cursor: 'pointer' }}
                            onClick={handleClick}
                        >
                            <ClearIcon />
                        </InputAdornment>
                    )
                }}
            />
        </FormControl>
    );
};

export default TypeSearch;
