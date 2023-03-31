import React, { Navlink, useState, useEffect, useContext } from 'react';
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import Autocomplete from '@mui/material/Autocomplete';
import round from '../helpers/RoundNumbers'
import styles from '../style.module.css';
import { calcTotal } from '../helpers/Calculation';
import { addDots } from '../../../helpers/Dotter';

const Row = observer((props) => {
    const rows = toJS(props.store.selectedPerf);
    const handleChange = (event, index) => {
        const { name, value} = event.target;
        const formattedValue = name === 'volume' ? addDots(value) : value;
        rows[index][name] = formattedValue;
        props.store.setSubTotal(calcTotal(index, rows));
        props.store.setSelectedPerf(rows);
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
        props.store.setSelectedPerf(newRows);
    }

    useEffect(() => {
        if (rows[rows.length - 1].name) {
            props.store.setSelectedPerf([...rows, { count: '', name: '', volume: '', price: '', total: 0 }]);
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
                    value={props.row.name}
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
                    value={props.row.volume}
                    onChange={event => handleChange(event, props.index)}
                />
            </td>
            <td>
                <input
                    name='price'
                    type="number"
                    className={styles.price}
                    tabIndex="0"
                    value={props.row.price}
                    onChange={event => handleChange(event, props.index)}
                />
            </td>
            <td className={styles.total} >
                {addDots(props.row.total)}
            </td>
        </tr>
    );
});

export default Row;