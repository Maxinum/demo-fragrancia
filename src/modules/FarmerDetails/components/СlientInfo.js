import { observer } from 'mobx-react-lite';
import React, {useState, useContext} from 'react';
import { useEffect } from 'react';
import { Context } from '../../..';
import { addDots } from '../../../helpers/Dotter';
import { fetchClientHistory } from '../../ClientBlcok/api';

const clientInfo = observer((props) => {

    const { client } = useContext(Context);
    const id = client.selectedClient && client.selectedClient.trim() !== '' ? client.selectedClient.split(' ')[0] : -1;
    // const [ allclientInfo, setallClientInfo ] = useState([]);
    // const [ clientInfo, setClientInfo ] = useState([]);

    useEffect(() => {
        fetchClientHistory(id).then(data => client.setClientInfo(data.abc));
    }, [client.selectedClient]);

    const getMonthName = (monthIndex) => {
        const date = new Date(0);
        date.setUTCMonth(monthIndex);
        return date.toLocaleString('default', { month: 'long' });
    }

    const lastThreeMonths = [
        {name: getMonthName(new Date().getMonth() - 0), total: client.clientInfo.length > 0 && addDots(client.clientInfo[0].total) + 'тг.'},
        {name: getMonthName(new Date().getMonth() - 1), total: client.clientInfo.length > 0 && addDots(client.clientInfo[0].total1) + 'тг.'},
        {name: getMonthName(new Date().getMonth() - 2), total: client.clientInfo.length > 0 && addDots(client.clientInfo[0].total2) + 'тг.'},
        {name: getMonthName(new Date().getMonth() - 3), total: client.clientInfo.length > 0 && addDots(client.clientInfo[0].total3) + 'тг.'},
    ];
    return (
        <div className='card'>
            <div className="history_label">Customer Information</div>
            <div className="card__content">
                <div style={{width: '100%'}}>
                    <div>ABC-XYZ:</div>
                    <div id="abc-xyz">{client.clientInfo.length > 0 && client.clientInfo[0].abc_xyz}</div>
                </div>
                {lastThreeMonths.map(month => (
                    <div key={month.name}>
                        <div className="month">{month.name + ':'}</div>
                        <div className="totalclient">{month.total}</div>
                    </div>
                ))}
                <textarea placeholder="Comment..." id="card_comment"
                    cols="15" rows="5"></textarea>
            </div>
        </div>
    );
});

export default clientInfo;