import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { observer } from "mobx-react-lite";
import ExcelIcon from '@mui/icons-material/InsertDriveFile';
import { Context } from "../index";
import PDFfile from '../helpers/PDFFile';
import xlsxFile from '../helpers/XLSXFile';

const SpeedDialElememnt = observer((props) => {
    const [open, setOpen] = useState(false);
    const { orders } = useContext(Context);
    const { client } = useContext(Context);
    const selectedDelivery = client.delivery.find(item => item?.id === client.selectedDelivery);
    const data = {
        perf:orders.selectedPerf,
        cons:orders.selectedCons,
        payments: orders.paymentRows,
        total1: orders.SubTotal,
        total2: orders.SecSubTotal,
        mainTotal: orders.grandTotal,
        withoutBonus: orders.withoutDiscount,
        discount: orders.discount,
        client: client.selectedClient,
        date: client.date,
        delivery: selectedDelivery !== undefined ? selectedDelivery.label : '',
        debt: orders.calcDebt,
        wpLink: client.wpLink,
        orderId: orders.bufId.sale === undefined ? 0 : orders.bufId.sale[0].id,
    };

    return (
        <Box>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', right: -5, top: 0, '& .MuiFab-primary': { width: 35, height: 30, backgroundColor: '#757575' } }}
                icon={<SpeedDialIcon style={{ padding: 0 }} />}
                direction={'down'}
                children={<PDFfile />}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
            >
                <PDFfile open={open} data={data}/>
                <SpeedDialAction
                    icon={<ExcelIcon style={{ color: 'green' }} />}
                    tooltipTitle={'excel'}
                    onClick={()=>xlsxFile(data)}
                />
            </SpeedDial>
        </Box>
    );
});

export default SpeedDialElememnt;