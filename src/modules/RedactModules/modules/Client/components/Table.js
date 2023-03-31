import React, { useEffect } from 'react';
import MuiTable from '../../../../MuiTable';

const ClientTable = () => {

    const data = [{
        category: "3",
        city: "5",
        delivery: "5",
        id: "1120",
        manager: "5",
        name: "Teees",
        phone: "87081647601",
        status: "0"
    }];

    const headers =[
        {
            id: 'category',
            numeric: false,
            disablePadding: true,
            label: 'Category',
        },
        {
            id: 'city',
            numeric: false,
            disablePadding: false,
            label: 'City',
        },
        {
            id: 'delivery',
            numeric: true,
            disablePadding: true,
            label: 'Delivery',
        },
        {
            id: 'id',
            numeric: false,
            disablePadding: false,
            label: 'Id',
        },
        {
            id: 'manager',
            numeric: false,
            disablePadding: true,
            label: 'Manager',
        },
        {
            id: 'name',
            numeric: true,
            disablePadding: false,
            label: 'Name',
        },
        {
            id: 'phone',
            numeric: true,
            disablePadding: true,
            label: 'Phone Number',
        },
        {
            id: 'status',
            numeric: false,
            disablePadding: false,
            label: 'Archive',
        }
    ]

    return (
        <MuiTable
            data={data}
            headers={headers}
            name="Clients"
        />
    )
}

export default ClientTable;