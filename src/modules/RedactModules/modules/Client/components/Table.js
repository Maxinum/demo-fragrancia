import 'react-tabulator/css/tabulator_semanticui.css';
import { ReactTabulator } from 'react-tabulator'
import React,{useEffect} from 'react';
import {columns} from '../helpers/Columns';


const ClientTable = () => {
    
    const data = [];

    return (
        <ReactTabulator
            data={data}
            columns={columns}
        />
    )
}

export default ClientTable;