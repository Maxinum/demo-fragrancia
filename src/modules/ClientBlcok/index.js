import React, { Navlink, useState, useEffect, useContext } from 'react';
import { fetchClients, fetchCategories, fetchDeliveryTypes } from "./api/index";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
// import InputLabel from '@mui/material/InputLabel';
import Farmer from './modules/Farmer';
import Hunter from './modules/Hunter'
import './style.css'

const InfoBlock = observer(() => {
    const [date, setdate] = useState('')
    const { client } = useContext(Context);
    useEffect(() => {
        fetchDeliveryTypes().then(data => client.setDelivery(data))
        fetchClients().then(data => client.setClients(data))
        fetchCategories().then(data => client.setCategories(data))
    }, []);

    const categories = client.categories;
    const recipients = JSON.parse(JSON.stringify(client.clients));
    if (window.location.pathname === '/farmer') {
        return (
            <Farmer />
        )
    } else {
        return (
            <Hunter />
        )
    }
});

export default InfoBlock;