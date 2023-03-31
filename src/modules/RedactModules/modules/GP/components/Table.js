import { columns } from '../helpers/Colums';
import React from 'react';
import MuiTable from '../../../../MuiTable';

const GPTable = () => {
    
    const data = [];
    
    return (
        <MuiTable
            data={data}
            columns={columns}
        />
    )
}

export default GPTable;