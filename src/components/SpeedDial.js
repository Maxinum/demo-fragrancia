import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { observer } from "mobx-react-lite";
import PrintIcon from '@mui/icons-material/Print';
import { Context } from "../index";
import PDFfile from '../helpers/PDFFile';
import xlsxFile from '../helpers/XLSXFile';

const SpeedDialElememnt = observer((props) => {
    const [open, setOpen] = useState(false);
    const { orders } = useContext(Context);
    const data = {
        perf:orders.selectedPerf,
        cons:orders.selectedCons,
        total1: orders.subTotal,
        total2: orders.SecSubTotal,
        mainTotal: orders.grandTotal,
        withoutBonus: orders.withoutDiscount,
        discount: orders.discount,
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
                    icon={<PrintIcon />}
                    tooltipTitle={'excel'}
                    onClick={()=>xlsxFile(data)}
                />
            </SpeedDial>
        </Box>
    );
});

export default SpeedDialElememnt;