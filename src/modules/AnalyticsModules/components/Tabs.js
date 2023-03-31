import * as React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AbcIcon from '@mui/icons-material/Abc';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';

export default function VerticalTabs(props) {
    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={props.value}
            onChange={props.func}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider',width: '7vw' }}
        >
            <Tab icon={<HomeIcon />} label="Главная" />
            <Tab icon={<PaymentIcon />} label="Расходы" />
            <Tab icon={<WarehouseIcon />} label="Остатки" />
            <Tab icon={<AbcIcon />} label="ABC-XYZ" />
            <Tab icon={<CreditCardOffIcon />} label="Долги" />
            <Tab icon={<PeopleIcon />} label="Лиды" />
        </Tabs>
    );
}