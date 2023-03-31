import React, { useState, useEffect, useContext } from 'react';
import styles from '../AromatsTable/style.module.css';
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { fetchCons } from './api';
import Footer from '../AccessorTable/components/Footer';
import Header from '../AccessorTable/components/Header';
import Row from '../AccessorTable/components/Row';
import { toJS } from 'mobx';
import { addDots } from '../../helpers/Dotter';

const SecondTable = observer((props) => {
    const { orders } = useContext(Context);
    const { products } = useContext(Context);
    const rows = toJS(orders.selectedCons);

    useEffect(() => {
        if (products.perfumes.length === 0) {
            fetchCons().then(data => products.setConsunables(data))
        }
    }, []);

    return (
        <div>
            <table className={styles.maintable}>
                <Header />
                <tbody id="mainTableTbody" data-temp="firstRow">
                {rows.map((element, index) => (
                    <Row key={index} row={element} index={index} data={products.consunables} store={orders} />
                ))}
                </tbody>
                <Footer subtotal={addDots(orders.SecSubTotal)} store={orders} />
            </table>
        </div >
    );
});

export default SecondTable;