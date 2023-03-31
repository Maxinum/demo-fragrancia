import React, { useState, useContext } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Icon } from '@mui/material';
import { observer } from "mobx-react-lite";
import IconButton from '@mui/material/IconButton';
import { Context } from '../../..';

const WhatsApp = observer((props) => {

    const { client } = useContext(Context);
    const openWhatsapp = () => {
        window.open(client.wpLink);
    }

    return (
        <>
            <IconButton aria-label="delete" onClick={openWhatsapp}>
                <Icon sx={{ color: "#065f3b" }} component={WhatsAppIcon} alt="logo" />
            </IconButton>
        </>
    );
});

export default WhatsApp;
