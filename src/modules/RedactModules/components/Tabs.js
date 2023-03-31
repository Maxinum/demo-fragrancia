import * as React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';

export default function VerticalTabs(props) {
    return (
        <Tabs value={props.value} onChange={props.func} >
            <Button
                style={{ fontSize: '25px' }}
                onClick={props.click}
                onClose={props.close}
                variant='outline'>+</Button>
            <Tab label="Ароматы" />
            <Tab label="Аксессуары" />
            <Tab label="Склад" />
            <Tab label="Клиенты" />
            <Tab label="Готовая продукция" />
        </Tabs>
    );
}