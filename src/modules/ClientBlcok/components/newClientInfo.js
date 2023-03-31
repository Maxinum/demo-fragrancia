import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { observer } from 'mobx-react-lite'
import { Context } from "../../../index";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const newClientInfo = observer((props) => {
    const { client } = useContext(Context);
    const [open, setOpen] = useState('none');
    const [icon, setIcon] = useState(KeyboardArrowDownIcon);

    const HandleChange= () =>{
        open === 'none'?setOpen('flex'):setOpen('none')
        icon === CloseIcon?setIcon(KeyboardArrowDownIcon):setIcon(CloseIcon)
    }

    return (
        <div style={{width:'90%'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <TextField
                    label="Имя"
                    variant="standard"
                    sx={{ width: '45%' }}
                />
                <div style={{display:'flex', width:"45%"}}>
                    <TextField
                        label="Телефон"
                        variant="standard"
                        sx={{ width: '80%' }}
                    />
                    <IconButton aria-label="delete" onClick={HandleChange}>
                        <Icon sx={{ color: "#757575" }} component={icon} alt="logo" />
                    </IconButton>
                </div>
            </div>
            <div style={{ display: open, justifyContent: 'space-between' }}>
                <TextField
                    label="Второй телефон"
                    variant="standard"
                    sx={{ width: '45%' }}
                />
                <TextField
                    label="Третий телефон"
                    variant="standard"
                    sx={{ width: '45%' }}
                />
            </div>
        </div>
    );
});

export default newClientInfo;
