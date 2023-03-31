import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Context } from '../../..';
import { addDots } from '../../../helpers/Dotter';
import { fetchBuffOrders } from '../../Buffer/api';
import { setClientInfo, setCons, setPayments, setPerfume } from '../../Buffer/helpers/FromBuff';
import { fetchClientHistory, fetchLastDays } from '../../ClientBlcok/api';

const clientHistory = observer((props) => {

    const { orders, client } = useContext(Context);
    const selectRef = useRef();
    const id = typeof client.selectedClient === 'string' ? client.selectedClient.split(' ')[0] : '';
    const [clientSale, setSale] = useState([]);
    // const [clientSale, setClientSale] = useState([]);

    useEffect(() => {
        if (client.lastDaysSales.length === 0) {
                fetchLastDays().then(data => client.setlastDaysSales(data.sales));
            }
    }, []);

    useEffect(() => {
        fetchClientHistory(id).then(data => client.setSales(data.sales));
    }, [client.selectedClient]);

    useEffect(() => {
        if (clientSale.length !== 0) {
            console.log(clientSale);
            setClientInfo(orders, client, clientSale.sale);
            setPerfume(orders, clientSale.perfumes)
            setCons(orders, clientSale.disposables);
            setPayments(orders, clientSale.payments);
            orders.setKeyDown(false);
        }
    }, [clientSale]);

    async function handleKeyDown(event) {
        if (event.key === 'Enter') {
            const selectedOption = selectRef.current.options[selectRef.current.selectedIndex];
            const id = selectedOption.id;
            await fetchBuffOrders(id).then(data => setSale(data));
        }
    }

    return (
        <div className="history">
            <div className="history_label">Sales</div>
            <select
                ref={selectRef}
                name=""
                id="history"
                size="10"
                onKeyDown={handleKeyDown}
            >
                {client.selectedClient && client.sales.length > 0 && client.sales.map((value, index) => (
                    <option key={index} id={value.id} >
                        {value.order_date && value.order_date.substring(0, value.order_date.indexOf("T"))} - {addDots(value.total)}
                    </option>
                ))}
                {!client.selectedClient && client.lastDaysSales.map((value, index) => (
                    <option key={index} id={value.id} >
                        {value.order_date && value.order_date.substring(0, value.order_date.indexOf("T"))} - {value.clientId} - {addDots(value.total)}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default clientHistory;

