import React, { Navlink, useState, useEffect, useContext } from "react";
// import { fetchClients, fetchCategories } from "./api/index";
// import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import styles from "../../AromatsTable/style.module.css";
import { toJS } from "mobx";

const Footer = observer((props) => {
  const handleChange = (event) => {
    if (event.target.checked) {
      props.store.setBonusCheck(event.target.checked);
    } else {
      props.store.setBonusCheck(event.target.checked);
    }
  };

  useEffect(() => {
    if (props.store.saleType === "Bonus") {
      props.store.setBonusHide(
        props.store.SubTotal > props.store.spentBonus ? false : true
      );
    } else {
      props.store.setBonusHide(true);
    }
  }, [props.store.saleType, props.store.SubTotal]);

  return (
    <tfoot>
      <tr>
        <td colSpan="3" rowSpan="4" className={styles.plus}>
          <div className="button_label">Accessories</div>
        </td>
        <td>Summary</td>
        <td colSpan="3">{props.subtotal}</td>
      </tr>
      <tr>
        <td>
          <input
            type="checkbox"
            value={props.store.bonusCheck}
            onChange={handleChange}
            hidden={props.store.bonusHide}
            id="checkBonus"
          />
        </td>
        <td colSpan="3" id="bonus">
          {props.store.spentBonus}
        </td>
      </tr>
    </tfoot>
  );
});

export default Footer;
