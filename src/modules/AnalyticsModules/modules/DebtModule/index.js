import React from 'react';
import Table from '../../../MuiTable';
import Filter from './components/Filter'

const DebtModule = () => {
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
        },
        {
            name:'test',
            total:34
        }
    ] 

    return (
        <div style={{ width: '100%',padding:'2rem',boxSizing:'border-box' }}>
            <Filter />
            <Table data={data} headers={headers} name="table" />
        </div>
    );
}

export default DebtModule;
