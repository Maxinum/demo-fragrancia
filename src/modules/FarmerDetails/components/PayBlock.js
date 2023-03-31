import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Context } from '../../..';
import { getPayments } from '../../../APIs/OrderAPI';
import { addDots } from '../../../helpers/Dotter';
import { setClientInfo, setCons, setPayments, setPerfume } from '../../Buffer/helpers/FromBuff';
import { fetchClientHistory, fetchLastDays } from '../../ClientBlcok/api';

const PayBlock = observer((props) => {

    const { orders, client } = useContext(Context);
    const selectRef = useRef();
    const id = typeof client.selectedClient === 'string' ? client.selectedClient.split(' ')[0] : '';
    const [clientPayments, setClientPayments] = useState([]);
    useEffect(() => {
        if (client.lastDaysPayments.length === 0) {
            fetchLastDays().then(data => client.setlastDaysPayments(data.payments));
        }
    }, []);

    useEffect(() => {
        fetchClientHistory(id).then(data => client.setPayments(data.payments));
    }, [client.selectedClient]);

    useEffect(() => {
        if (clientPayments.length !== 0) {
            console.log(clientPayments);
            setClientInfo(orders, client, clientPayments.sale);
            setPerfume(orders, clientPayments.perfumes)
            setCons(orders, clientPayments.disposables);
            setPayments(orders, clientPayments.payments);
            orders.setKeyDown(false);
        }
    }, [clientPayments]);


    async function handleKeyDown(event) {
        if (event.key === 'Enter') {
            const selectedOption = selectRef.current.options[selectRef.current.selectedIndex];
            const id = selectedOption.id;
            await getPayments(id).then(data => setClientPayments(data));
        }
    }

    return (
        <div className="history">
            <div className="payment_label">Payments</div>
            <select 
            ref={selectRef}
            name="" 
            id="payment" 
            size="10"
            onKeyDown={handleKeyDown}
            >
                {client.selectedClient && client.payments.length > 0 && client.payments.map((value, index) => (
                    <option key={index} id={value.id}>
                        {value.createdAt && value.createdAt.substring(0, value.createdAt.indexOf("T"))} - {addDots(value.sum)}
                    </option>
                ))}
                {!client.selectedClient && client.lastDaysPayments.map((value, index) => (
                    <option key={index} id={value.id} >
                        {value.createdAt && value.createdAt.substring(0, value.createdAt.indexOf("T"))} - {value.client} - {addDots(value.sum)}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default PayBlock;