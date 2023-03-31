import React, { Navlink, useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "../style.module.css";
import { toJS } from "mobx";
import Discount, { calcDiscount, discount } from "../helpers/Discount";
import { onlyDigits } from "../../../helpers/Validation";
import { calcTotal } from "../helpers/Calculation";
import { Context } from "../../..";

const Footer = observer((props) => {
  const orders = props.store;
  const { client } = useContext(Context);
  const newRows = [...toJS(orders.selectedPerf)];
  const [percent, setPercent] = useState("");
  const category = props.client.selectedCategory.type;
  const products = props.products.perfumes;

  const changeType = () => {
    const type = props.type === "Discount" ? "Bonus" : "Discount";
    const category = props.type === "Discount" ? 2 : 3;
    const selectedCategory = client.categories.find(
      (item) => item?.id === category
    );

    if (selectedCategory !== undefined) {
      client.setSelectedCategory(selectedCategory);
    }
    props.store.setSaleType(type);
  };

  // useEffect(() => {
  //     const type = props.type === 'Discount' ? 'Bonus' : 'Discount';
  //   }, [client.selectedClient]);

  useEffect(() => {
    let paymentSum = 0;
    if (props.type === "Bonus") {
      for (let i = 0; i < orders.paymentRows.length; i++) {
        paymentSum += orders.paymentRows[i].sum;
      }
      if (paymentSum >= orders.SubTotal) {
        let bonus = (orders.SubTotal * 0.03).toFixed(0);
        setPercent(bonus);
        props.store.setPercent(bonus);
      }
    } else {
      // setPercent('');
      // props.store.setPercent('');
    }
  }, [orders.paymentRows, orders.percent, orders.saleType]);

  const DivisorChange = (event) => {
    let percent = onlyDigits(event.target.value);
    if (percent > 99) {
      percent = 99;
    }
    setPercent(percent);
    props.store.setPercent(percent);
    calcDiscount(newRows, props.type, percent, orders, products, category);
  };

  return (
    <tfoot id="firstfoot">
      <tr>
        <td colSpan="3" rowSpan="4" className={styles.plus}>
          <div>{"Fragrances"}</div>
        </td>
        <td>Summary</td>
        <td colSpan="3">{props.subtotal}</td>
      </tr>
      <tr>
        <td>
          <button className={styles.show} id="show" onClick={changeType}>
            {props.type}
          </button>
        </td>
        <td colSpan="3">
          <input
            className={`${styles.mainBonus} ${
              props.type === "Bonus" ? styles.readOnly : ""
            }`}
            autoComplete="off"
            type="text"
            maxLength="3"
            value={props.store.percent}
            onChange={DivisorChange}
            readOnly={props.type === "Bonus"}
          />
          <span
            style={
              props.type === "Bonus"
                ? { display: "none" }
                : { display: "contents" }
            }
            className="percentSpan"
          >
            %
          </span>
        </td>
      </tr>
      {/* <Discount store={orders} /> */}
    </tfoot>
  );
});

export default Footer;
