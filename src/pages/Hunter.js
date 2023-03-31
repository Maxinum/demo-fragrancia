import React, { useContext, useEffect } from 'react';
import Buffer from '../modules/Buffer';
import AromatsTable from '../modules/AromatsTable';
import SecondTable from '../modules/AccessorTable';
// import InfoBlock from '../components/InfoBlock/InfoBlock';
import { observer } from "mobx-react-lite";
import PaymentBlock from '../components/PaymentBlock/PaymentBlock';
import PaymentTable from '../modules/PaymentTable';
import Buttons from '../components/Buttons';
import { Context } from "../index";
import InfoBlock from '../modules/ClientBlcok';
import HunterDetail from '../modules/HunterDetail';

const Hunter = observer(() => {

    const store = useContext(Context);
    return (
        <div>
            <div style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'flex-start',
            }}>
                <HunterDetail></HunterDetail>
                <div>
                    <InfoBlock />
                    <AromatsTable data={store} name='Flavors' />
                    <SecondTable data={store} name='Accessories' />
                    <PaymentBlock />
                    <PaymentTable />
                    <Buttons/>
                </div>
                <Buffer />
            </div>
        </div >
    );
});

export default Hunter;
