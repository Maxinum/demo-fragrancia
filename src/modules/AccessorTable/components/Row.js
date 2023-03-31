import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import Autocomplete from '@mui/material/Autocomplete';
import { addDots } from "../../../helpers/Dotter";
import { calcTotal } from "../../AromatsTable/helpers/Calculation";
import round from "../../AromatsTable/helpers/RoundNumbers";
import styles from '../../AromatsTable/style.module.css';
import React, { Navlink, useState, useEffect, useContext } from 'react';

const Row = observer((props) => {
    const rows = toJS(props.store.selectedCons);
    const handleChange = (event, index) => {
        const { name, value } = event.target;
        const formattedValue = name === 'volume' ? addDots(value) : value;
        rows[index][name] = formattedValue;
        props.store.setSecSubTotal(calcTotal(index, rows));
        props.store.setSelectedCons(rows);
    }

    const nameChange = (name, index) => {
        if (name === '') {
            return;
        }
        const newRows = [...rows];
        newRows[index].name = name;
        // const mult = type === 'Скидка' ? (100 - divisor) / 100 : 1;
        const selectedRow = props.data.filter(item => item.name === name);
        newRows[index].price = round(selectedRow[0]['inv_prices_eu']['1']);
        props.store.setSelectedCons(newRows);
    }

    useEffect(() => {
        if (rows[rows.length - 1].name) {
            props.store.setSelectedCons([...rows, { count: '', name: '', volume: '', price: '', total: 0 }]);
        }
    }, [rows]);
    return (
        <tr key={props.index}>
            <td className="firstNumber">{props.index + 1}</td>
            <td className='kolvo'>{props.row.count}</td>
            <td>
                <Autocomplete
                    freeSolo
                    options={props.data.map(option => option.name)}
                    renderInput={(params) => (
                        <div ref={params.InputProps.ref}>
                            <input style={{ textAlign: 'left', paddingLeft: '10px' }} type="text" {...params.inputProps} />
                        </div>
                    )}
                    name='name'
                    type='text'
                    autoSelect={true}
                    value={rows[0].name}
                    onChange={(event, newValue) => {
                        nameChange(newValue, props.index);
                    }}
                />
            </td>
            <td>
                <input
                    name='volume'
                    type="text"
                    className={styles.volume}
                    value={rows[0].volume}
                    onChange={event => handleChange(event, props.index)}
                />
            </td>
            <td>
                <input
                    name='price'
                    type="number"
                    className={styles.price}
                    tabIndex="0"
                    value={rows[0].price}
                    onChange={event => handleChange(event, props.index)}
                />
            </td>
            <td className={styles.total} >
                {addDots(rows[0].total)}
            </td>
        </tr>
    );
});

export default Row;