import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

const AlertComponent = ({ message, severity, open, handleClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
      <Alert variant="filled" severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
