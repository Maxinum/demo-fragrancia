import React, { useContext, useEffect, useState } from 'react';
import styles from '../../AromatsTable/style.module.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { addDots, removeDots } from '../../../helpers/Dotter';
import { minusWithDigits } from '../../../helpers/Validation';
import IconButton from '@mui/material/IconButton';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios';
import ImageIcon from '@mui/icons-material/Image';
import { green, pink } from '@mui/material/colors';
import { Context } from '../../../index';
import { useDropzone } from 'react-dropzone';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';


const PaymentTable = observer((props) => {
    const { orders, client } = useContext(Context);
    const parsedDate = dayjs(client.date, 'DD/MM/YYYY');
    const [date, setDate] = useState(parsedDate);
    // const [selectedFiles, setSelectedFiles] = useState([]);
    // const [preview, setPreview] = useState();
    const rows = toJS(orders.paymentRows);
    const newRows = [...rows];

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        onDrop: (acceptedFiles) => {
            if (acceptedFiles && acceptedFiles.length > 0) {
                orders.setSelectedFile(props.index, acceptedFiles[0]);
            }
        },
    });

    const deleteRow = (index) => {
        newRows.splice(index, 1);
        orders.setPaymentRows(newRows);
    }

    const ScoreChange = (event, index) => {
        if (event === '') {
            deleteRow(index);
        } else {
            newRows[index].score = event;
            orders.setPaymentRows(newRows)
        }
    }

    const handleSumChange = (event, index) => {
        const formattedValue = addDots(minusWithDigits(event.target.value));
        newRows[index].sum = removeDots(formattedValue);
        orders.setPaymentRows(newRows);
    };

    const handleDateChange = (date, index) => {
        const newRows = [...rows];
        const formattedDate = dayjs(date).format('DD.MM.YYYY');
        newRows[index].date = formattedDate;
        orders.setPaymentRows(newRows);
        setDate(date);
    };

    useEffect(() => {
        const todayDate = dayjs().format('DD.MM.YYYY');
        newRows[props.index].date = todayDate;
        orders.setPaymentRows(newRows);
    }, []);

    const file = toJS(orders.selectedFile)[props.index];
    const selectedFileExists = Boolean(file);

    useEffect(() => {
        if (!selectedFileExists) {
            orders.setImgPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(file);
        orders.setImgPreview(objectUrl);
        props.row.photoCheck = file.name;
        newRows[props.index].photoCheck = file.name;
        orders.setPaymentRows(newRows);
        orders.setSelectedFile({ ...toJS(orders.selectedFile), [props.index]: file });
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFileExists, file]);

    useEffect(() => {
        if (rows[rows.length - 1].score) {
            orders.setPaymentRows([...rows, { score: '', sum: '', date: '', photoCheck: '' }]);
        }
    }, [rows]);

    return (
        <tr key={props.index}>
            <td>
                <Select sx={{ width: '100%', borderRadius: '0' }}
                    value={rows[props.index].score}
                    onChange={(event) => { ScoreChange(event.target.value, props.index); }}>
                    <MenuItem value=""></MenuItem>
                    <MenuItem value="1">Kaspi</MenuItem>
                    <MenuItem value="2">Нал ₸</MenuItem>
                    <MenuItem value="3">Kaspi Акылбек</MenuItem>
                    <MenuItem value="4">Kaspi Pay</MenuItem>
                    <MenuItem value="5">Forte Акылбек</MenuItem>
                </Select>
            </td>
            <td>
                <input type="text" className="sum" value={addDots(rows[props.index].sum)}
                    onChange={(event) => handleSumChange(event, props.index)}
                />
            </td>
            <td>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        inputFormat="DD/MM/YYYY"
                        onChange={(date) => handleDateChange(date, props.index)}
                        value={date}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                fullWidth
                            />
                        )}
                    />
                </LocalizationProvider>
            </td>
            <td>
                {!toJS(orders.selectedFile)[props.index] ? (
                    newRows[props.index].photoCheck ? (
                    <a href={newRows[props.index].photoCheck} target="_blank" rel="noopener noreferrer">
                        <ImageIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} fontSize="large" />
                    </a>
                    ) : (
                    <div {...getRootProps({ index: props.index })}>
                        <input {...getInputProps()} />
                        <IconButton aria-label="upload picture" component="label" size="small">
                        <AddAPhotoIcon fontSize="medium" />
                        </IconButton>
                    </div>
                    )
                ) : (
                    (toJS(orders.selectedFile)[props.index] !== undefined && newRows[props.index].photoCheck) && (
                    <a href={URL.createObjectURL(toJS(orders.selectedFile[props.index]))} target="_blank" rel="noopener noreferrer">
                        <ImageIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} fontSize="large" />
                    </a>
                    )
                )}
            </td>
        </tr>
    );
});

export default PaymentTable;
