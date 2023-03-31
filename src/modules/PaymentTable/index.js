import React, { Navlink, useState, useEffect, useContext } from 'react';
import { observer } from "mobx-react-lite";
import styles from '../AromatsTable/style.module.css';
import { toJS } from 'mobx';
import PaymentTable from './components/Row';
import HeaderPayment from './components/Header';
import FooterPayment from './components/Footer';
import { Context } from '../..';

const AromatTable = observer((props) => {
    const { orders } = useContext(Context);
    // const client = props.data.client;
    // const products = props.data.products;
    const rows = toJS(orders.paymentRows);

    return (
        <table className={styles.maintable}>
            <HeaderPayment></HeaderPayment>
            <tbody id="mainTableTbody" data-temp="firstRow">
                {rows.map((element, index) => (
                    <PaymentTable row={element} index={index}/>
                ))}
            </tbody>
            <FooterPayment></FooterPayment>
        </table>
    );
});

export default AromatTable;