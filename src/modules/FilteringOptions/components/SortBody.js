import React from 'react';
import FormControl from '@mui/material/FormControl';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';

const SortSelect = (props) => {
    const [Direction, setDirection] = React.useState(props.direction)
    const changeFunction = props.change;

    const ChangeIcon = () => {
        const currDirection = Direction === 'asc' ? 'desc': 'asc';
        setDirection(currDirection);
        changeFunction(props.name,currDirection, props.index);
    }

    return (
        <FormControl sx={{
            minWidth: 200, display: 'flex', flexDirection: 'row', alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <label>{props.name}</label>
            <IconButton onClick={ChangeIcon} color="primary" aria-label="add to shopping cart">
                {Direction ==='asc'?<ArrowDropDownIcon />:<ArrowDropUpIcon/>}
            </IconButton>
        </FormControl>
    );
};

export default SortSelect 