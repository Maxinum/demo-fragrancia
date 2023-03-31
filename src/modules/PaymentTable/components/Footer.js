import React, { Navlink, useState, useEffect, useContext } from "react";
import styles from "../../AromatsTable/style.module.css";
import { observer } from "mobx-react-lite";

const FooterPayment = observer((props) => {
  return (
    <>
      <tfoot>
        <tr>
          <td
            colSpan="4"
            rowSpan="2"
            style={{ backgroundColor: "#7F1D1D" }}
            className={styles.plus}
          >
            <div className={styles.button_label} style={{ color: "#7F1D1D" }}>
              Payment
            </div>
          </td>
        </tr>
      </tfoot>
    </>
  );
});

export default FooterPayment;
