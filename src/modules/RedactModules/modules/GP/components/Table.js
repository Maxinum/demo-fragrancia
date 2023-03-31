import 'react-tabulator/css/tabulator_semanticui.css';
import { ReactTabulator } from 'react-tabulator';
import { columns } from '../helpers/Colums';
import React from 'react';

const GPTable = () => {
    
    const data = [];
    
    return (
        <ReactTabulator
            data={data}
            columns={columns}
        />
    )
}

export default GPTable;