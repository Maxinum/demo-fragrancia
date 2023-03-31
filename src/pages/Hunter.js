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
                <div style={{paddingLeft: '300px'}}>
                    <InfoBlock />
                    <AromatsTable data={store} name='Fragrances' />
                    <SecondTable name='Accessories' />
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
