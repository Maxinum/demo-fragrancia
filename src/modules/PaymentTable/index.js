import React,{useEffect, useState} from 'react';
import styles from '../AromatsTable/style.module.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { addDots } from '../../helpers/Dotter';

const PaymentTable = () => {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [sum, setSum] = useState('');
    const handleChange = (newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        // setCategory(client.selectedCategory)
    }, []);

    const handleSumChange = (event) => {
        const formattedValue = addDots(event.target.value);
        setSum(formattedValue);
    };

    return (
        <table className={styles.maintable} data-html2canvas-ignore="true">
            <thead style={{ backgroundColor: '#7F1D1D' }}>
                <tr>
                    <th style={{ width: "40%" }}>Счёт</th>
                    <th style={{ width: "30%" }}>Сумма</th>
                    <th style={{ width: "30%" }}>Дата</th>
                </tr>
            </thead>
            <tbody id="payTableBody" data-temp="payRow">
                <tr>
                    <td>
                        <Select sx={{ width: '100%', borderRadius: '0' }}>
                            <MenuItem value=""></MenuItem>
                            <MenuItem value="1">Kaspi</MenuItem>
                            <MenuItem value="2">Нал ₸</MenuItem>
                            <MenuItem value="3">Kaspi Акылбек</MenuItem>
                            <MenuItem value="4">Kaspi Pay</MenuItem>
                            <MenuItem value="5">Forte Акылбек</MenuItem>
                        </Select>
                    </td>
                    <td>
                        <input type="text" className="sum" value={sum} onChange={handleSumChange} />
                    </td>
                    <td>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        </LocalizationProvider>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3" rowSpan="2" style={{ backgroundColor: '#7F1D1D' }} className={styles.plus}>
                        <div className={styles.button_label} style={{ color: "#7F1D1D" }}>Оплата</div>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}

export default PaymentTable;
