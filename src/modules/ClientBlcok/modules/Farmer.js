import React, { useState, useEffect, useContext } from 'react';
import { fetchClients, fetchCategories, fetchDeliveryTypes } from "../api/index";
import { Context } from "../../../index";
import { observer } from "mobx-react-lite";
import DatePicker from '../components/DatePicker';
import SalesCategory from '../components/Select';
import DeliveryBlock from '../components/DeliveryBlock';
import SpeedDial from '../../../components/SpeedDial';
import AutocompleteBlock from '../components/AutocompleteBlock';
import WhatsApp from '../components/whatsApp';

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

    return (
        <div className="infocard">
            <div className="first_part" >
                <DatePicker />
                <SalesCategory categories={categories} />
            </div>
            <div className=" second_part">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <AutocompleteBlock label='Клиент' data={recipients}/>
                    <WhatsApp />
                </div>
                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'space-between' }}>
                    <DeliveryBlock />
                    <SpeedDial />
                </div>
            </div>
        </div>
    );
});

export default InfoBlock;