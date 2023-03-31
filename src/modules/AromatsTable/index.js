import React, { Navlink, useState, useEffect, useContext } from 'react';
// import { fetchClients, fetchCategories } from "./api/index";
import Row from './components/Row'
import Header from './components/Header';
import Footer from './components/Footer';
import { observer } from "mobx-react-lite";
import styles from './style.module.css';
import { fetchPerfumes } from './api';
import last from './helpers/LastRow';
import { toJS } from 'mobx';
import { addDots } from '../../helpers/Dotter';

const AromatTable = observer((props) => {
    const orders = props.data.orders;
    const client = props.data.client;
    const products = props.data.products;
    const rows = toJS(orders.selectedPerf);
    useEffect(() => {
        if (products.perfumes.length === 0) {
            fetchPerfumes().then(data => products.setPerfumes(data))
        }
    }, []);

    return (
        <table className={styles.maintable}>
            <Header />
            <tbody id="mainTableTbody" data-temp="firstRow">
                {rows.map((element, index) => (
                    <Row key={index} row={element} index={index} data={products.perfumes} store={orders} />
                ))}
            </tbody>
            <Footer subtotal={addDots(orders.SubTotal)} type={orders.saleType} store={orders}/>
        </table>
    );
});

export default AromatTable;