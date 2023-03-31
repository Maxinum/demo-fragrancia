import React from 'react';
import { ReactTabulator } from 'react-tabulator'

const Table = (props) => {
    <ReactTabulator
        data={props.data}
        columns={props.columns}
    />
}

export default Table;