import React, { useState, useContext } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {Icon } from '@mui/material';
import { observer } from "mobx-react-lite";
import IconButton from '@mui/material/IconButton';

const WhatsApp = observer((props) => {

    const openWhatsapp = () => {
        window.open(props.href)
    }

    return (
        <IconButton aria-label="delete" onClick={openWhatsapp}>
            <Icon sx={{ color: "#757575" }} component={WhatsAppIcon} alt="logo" />
        </IconButton>
    );
});

export default WhatsApp;
