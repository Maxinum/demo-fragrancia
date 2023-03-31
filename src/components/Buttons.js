import React from 'react';
import Button from '@mui/material/Button'
// import {createTheme} from '@mui/styles';
import ThemeProvider from '@mui/styles/ThemeProvider';
import SendIcon from '@mui/icons-material/Send';
import { observer } from 'mobx-react-lite';
import { createOrder } from '../http/OrderAPI';
import Alert from '@mui/material/Alert';

const Buttons = observer(() => {
    // const theme = createTheme({
    //     status: {
    //         danger: '#e53e3e',
    //     },
    //     palette: {
    //         neutral: {
    //             main: '#056f46',
    //             contrastText: '#fff',
    //         },
    //     },
    // });

    const sendOrder = (e) => {
        let closed = e.target.innerText === 'ОФОРМИТЬ' ? 1 : 0
        const test = {
            clientId: '001',
            order_date: '1',
            sales_type: '1',
            total: '1',
            spent_bonus: '1',
            add_bonus: '1',
            discount: '1',
            client_type: '1',
            comment: '1',
            delivery: '1',
            closed: closed,
        }
        createOrder(test);
        <Alert variant="outlined" severity="success">
            This is a success alert — check it out!
        </Alert>
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignContent: 'center',
            marginBottom: '50px',
            marginTop: '50px',
        }}>
                <Button
                    color="inherit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={sendOrder}
                >Оформить</Button>
                <Button
                    color="inherit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={sendOrder}
                >В буфер</Button>
        </div>
    );
});

export default Buttons;
