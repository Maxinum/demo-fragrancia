import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState, useRef } from "react";

const HunterSets = observer((props) => {
  return (
    <div className="history">
      <div className="payment_label">Ready-made packages</div>
      <select name="" id="payment" size="10" onKeyDown={""}>
        <option></option>

        <option></option>
      </select>
    </div>
  );
});

export default HunterSets;
