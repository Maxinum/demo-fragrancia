import 'react-tabulator/css/tabulator_semanticui.css';
import { ReactTabulator } from 'react-tabulator'
import React from 'react';
import { columns } from '../helpers/Columns';

const PerfumeTable = () => {
    
    const data = [
        
    ]

    return (
        <ReactTabulator
            data={data}
            columns={columns}
        />
    )
}

export default PerfumeTable;