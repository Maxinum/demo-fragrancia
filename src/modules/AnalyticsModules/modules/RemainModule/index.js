import React from 'react';
import MuiTable from '../../../MuiTable'
import Filter from './components/Filter'

const RemainModule = () => {
    const headers = [
        {
            id: 'name',
            numeric: false,
            disablePadding: true,
            label: 'Name',
        },
        {
            id: 'total',
            numeric: true,
            disablePadding: false,
            label: 'Total',
        },
    ]

    const data = [
        {
            name:'Test',
            total:500
        }
    ] 

    return (
        <div style={{ width: '100%',padding:'2rem',boxSizing:'border-box' }}>
            <Filter />
            <MuiTable headers={headers} data={data} name="Table" />
        </div>
    );
}

export default RemainModule;
