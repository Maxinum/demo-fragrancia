import React, { useContext, useEffect, useState } from "react";
import "./PaymentBlock.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import { addDots } from "../../helpers/Dotter";

const PaymentBlock = observer((props) => {
  const { orders, client } = useContext(Context);
  const [color, setColor] = useState("");

  let sum = 0;
  const handleNoteChange = (event) => {
    orders.setComment(event.target.value);
  };

  useEffect(() => {
    if (orders.initialDebt > 0) {
      setColor("#FF0000");
    } else if (orders.initialDebt === 0) {
      setColor("black");
    } else {
      setColor("#130dd1");
    }
  }, [client.selectedClient]);

  for (let i = 0; i < orders.paymentRows.length; i++) {
    sum += Number(orders.paymentRows[i].sum);
  }
  return (
    <div className="paycard">
      <div className="paycard-note">
        <label className="label-note" htmlFor="note">
          Note:
        </label>
        <input
          type="text"
          name="note"
          className="note"
          onChange={handleNoteChange}
          id="commentInput"
          autoComplete="off"
        />
      </div>
      <div className="div-pay">
        <div className="debtinfo">
          <div className="torow" data-html2canvas-ignore="true">
            <div>Initial debt:</div>
            <div id="debt" style={{ color: color }} className="totals total_tg">
              {" "}
              {addDots(orders.initialDebt)}
            </div>
          </div>
          <div className="torow" data-html2canvas-ignore="true">
            <div>Current debt:</div>
            <div id="currentDebt" className="totals total_tg">
              {addDots(orders.currDebt - sum)}
            </div>
          </div>
          <div className="torow" data-html2canvas-ignore="true">
            <div> Total debt: </div>
            <div id="deptCalc" className="totals total_tg">
              {addDots(orders.calcDebt - sum)}
            </div>
          </div>
        </div>
        <div className="totalinfo">
          <div className="torow">
            <div>Before the discount:</div>
            <div className="totals total_tg">
              {addDots(orders.withoutDiscount)}
            </div>
          </div>
          <div className="torow">
            <div>Discount:</div>
            <div className="totals total_tg">{addDots(orders.discount)}</div>
          </div>
          <div className="torow grandtotal">
            <div>To be paid: </div>
            <div className="totals total_tg">{addDots(orders.grandTotal)}</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PaymentBlock;
