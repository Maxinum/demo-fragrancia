import React, { Navlink, useState, useEffect, useContext } from 'react';
import { observer } from "mobx-react-lite";

const Header = observer((props) => {
    return (
        <thead>
            <tr>
                <th style={{ width: "4%" }}>№</th>
                <th style={{ width: '8%' }}>Quantity</th>
                <th style={{ width: "60%" }}>Name</th>
                <th style={{ width: "8%" }}>Volume</th>
                <th style={{ width: "8%" }}>Price</th>
                <th style={{ width: "10%" }}>Result</th>
            </tr>
        </thead>
    );
});

export default Header;