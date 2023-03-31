import React, { Navlink, useState, useEffect, useContext } from 'react';
// import { fetchClients, fetchCategories } from "./api/index";
// import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import styles from '../../AromatsTable/style.module.css';
import { toJS } from 'mobx';

const Footer = observer((props) => {
    return (
        <tfoot>
            <tr>
                <td colSpan="3" rowSpan="4" className={styles.plus}>
                    <div className="button_label">Аксессуары</div>
                </td>
                <td>
                    Подытог
                </td>
                <td colSpan="3">
                    {props.subtotal}
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" id="checkBonus" />
                </td>
                <td colSpan="3" id="bonus">
                </td>
            </tr>
        </tfoot>
    );
});

export default Footer;