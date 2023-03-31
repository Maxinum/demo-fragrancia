import React, { Navlink, useState, useEffect, useContext } from 'react';
import { observer } from "mobx-react-lite";

const Header = observer((props) => {
    return (
        <thead>
            <tr>
                <th style={{ width: "4%" }}>№</th>
                <th style={{ width: '8%' }}>К-во</th>
                <th style={{ width: "60%" }}>Наименование</th>
                <th style={{ width: "8%" }}>Объем</th>
                <th style={{ width: "8%" }}>Цена</th>
                <th style={{ width: "10%" }}>Итог</th>
            </tr>
        </thead>
    );
});

export default Header;