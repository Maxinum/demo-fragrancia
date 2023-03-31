import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const DialogComponent = ({ open, close, title, message, btnAction1, btnText1, btnAction2, btnText2}) => {

    // setTimeout(() => {
    //   open = false;
    //   console.log(open);
    // }, 1500);


    return (
        <Dialog
        open={open}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {message} 
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={btnAction1}>{btnText1}</Button>
            <Button onClick={btnAction2} autoFocus>
                {btnText2}
            </Button>
        </DialogActions>
    </Dialog>
    );
};

export default DialogComponent;