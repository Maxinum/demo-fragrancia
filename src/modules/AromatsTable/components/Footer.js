import React, { Navlink, useState, useEffect, useContext } from 'react';
// import { fetchClients, fetchCategories } from "./api/index";
// import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import styles from '../style.module.css';
import { toJS } from 'mobx';
import { discount } from '../helpers/Discount';

const Footer = observer((props) => {
    const price = props.store.selectedPerf[0].price;
    const newRows = [...toJS(props.store.selectedPerf)];
    const changeType = () =>{
        const type = props.type === 'Скидка' ? 'Бонус' : 'Скидка';
        props.store.setSaleType(type);
    }

    const DivisorChange = (event) =>{
        const percent = event.target.value;
        const discountedPrice = discount(price, percent);
        newRows[0].price = discountedPrice;
        newRows[0].total = newRows[0].volume * newRows[0].price;
        props.store.setSubTotal(newRows[0].total);
        props.store.setSelectedPerf(newRows);
    }

    return (
        <tfoot id="firstfoot">
            <tr>
                <td colSpan="3" rowSpan="4" className={styles.plus}>
                    <div>{'Ароматы'}</div>
                </td>
                <td>Подытог</td>
                <td colSpan="3">
                    {props.subtotal}
                </td>
            </tr>
            <tr>
                <td>
                    <button
                        className={styles.show}
                        id="show"
                        onClick={changeType}
                    >
                        {props.type}
                    </button>
                </td>
                <td colSpan="3">
                    <input
                        className={styles.mainBonus}
                        autoComplete="off"
                        type="text"
                        maxLength="3"
                        max="100"
                        value={props.divisor}
                        onChange={DivisorChange} />
                    <span
                        style={props.type === 'Бонус' ? { display: 'none' } : { display: 'contents' }}
                        className="percentSpan">
                        %
                    </span>
                </td>
            </tr>
        </tfoot>
    );
});

export default Footer;