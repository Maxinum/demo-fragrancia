import React, { Navlink, useState, useEffect, useContext } from "react";
import { observer } from "mobx-react-lite";

const HeaderPayment = observer((props) => {
  return (
    <thead style={{ backgroundColor: "#7F1D1D" }}>
      <tr>
        <th style={{ width: "20%" }}>Account</th>
        <th style={{ width: "30%" }}>Amount</th>
        <th style={{ width: "30%" }}>Date</th>
        <th style={{ width: "20%" }}>Cheque</th>
      </tr>
    </thead>
  );
});

export default HeaderPayment;
