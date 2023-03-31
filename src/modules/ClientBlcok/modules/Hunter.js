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
import { fetchUsers } from '../../AdminPanel/api';
import { fetchCities } from '../../../http/ClientAPI';
import NewClientInfo from '../components/newClientInfo';

const InfoBlock = observer(() => {
    const [date, setdate] = useState('')
    const { client, user } = useContext(Context);
    useEffect(() => {
        fetchDeliveryTypes().then(data => client.setDelivery(data))
        fetchCategories().then(data => client.setCategories(data))
        fetchCities().then(data => client.setCities(data))
        fetchUsers().then(data => user.setAllUsers(data))
    }, []);

    const users = user.users;
    const categories = client.categories;
    const data = client.cities;

    return (
        <div className="infocard" style={{height:'180px'}}>
            <div className="first_part" >
                <DatePicker />
                <SalesCategory categories={categories} />
                <SalesCategory categories={users} />
            </div>
            <div className=" second_part" style={{fontSize:'10px'}}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <AutocompleteBlock  label='Города'  data={data}/>
                </div>
                <div style={{display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'space-between' }}>
                    <NewClientInfo />
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