import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { observer } from 'mobx-react-lite'
import { Context } from "../../../index";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';

const DatePicker = observer((props) => {
    const { client } = useContext(Context);
    const currentDate = dayjs(props.date).format('DD.MM.YYYY');
    if (client.date === '') {
        client.setDate(currentDate)
    }
    const parsedDate = dayjs(client.date, 'DD/MM/YYYY');
    const today = dayjs().format('DD/MM/YYYY');
    const label = parsedDate.format('DD/MM/YYYY') === today ? 'Today' : 'Date';

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} >
            <Stack spacing={3} sx={{ width: '100%' }} size='small'>
                <DesktopDatePicker
                    label={label}
                    inputFormat="DD/MM/YYYY"
                    onChange={(newValue) => {
                        const formattedDate = dayjs(newValue).format('DD/MM/YYYY');
                        client.setDate(formattedDate);
                    }}
                    value={parsedDate}
                    renderInput={(params) => <TextField variant='standard' size='small'
                        {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
});

export default DatePicker;
