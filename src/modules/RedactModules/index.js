import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TabPanel from './components/TabPanel';
import Tabs from './components/Tabs';
import Client from './modules/Client';
import Consumable from './modules/Consumable';
import Perfume from './modules/Perfume';
import Union from './modules/Union';
import GP from './modules/GP';
import './style.css';


export default function BasicTabs() {
    const [value, setValue] = useState(1);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        console.log('open')
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', height: 'calc(100vh - 84px)' }}>
            <TabPanel value={value} index={1}  >
                <Perfume close={handleClose} open={value === 1 ? open : false} />
            </TabPanel>
            <TabPanel value={value} index={2} >
                <Consumable close={handleClose} open={value === 2 ? open : false} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Union close={handleClose} open={value === 3 ? open : false} />
            </TabPanel>
            <TabPanel value={value} index={4} >
                <Client />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <GP close={handleClose} open={value === 5 ? open : false} />
            </TabPanel>
            <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    func={handleChange}
                    click={handleOpen}
                    close={handleClose} />
            </Box>
        </Box>
    );
}