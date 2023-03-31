import React from 'react';
import { ReactTabulator } from 'react-tabulator'
import 'react-tabulator/css/tabulator_semanticui.css';

const Table = (props) => {
    console.log(props.columns)
    return (
        <ReactTabulator
            data={props.data}
            columns={props.columns}
        />
    )
}

export default Table;