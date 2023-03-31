import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { observer } from 'mobx-react-lite'
import { Context } from "../../../index";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';

const DatePicker = observer((props) => {
    const { client } = useContext(Context);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Stack spacing={3} sx={{ width: '100%' }} size='small'>
                <DesktopDatePicker
                    label="Дата"
                    inputFormat="DD/MM/YYYY"
                    onChange={(event, newValue) => {

                    }}
                    renderInput={(params) => <TextField variant='standard' size='small'
                        {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
});

export default DatePicker;
