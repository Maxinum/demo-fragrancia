import React from 'react';
import Filter from './components/Filter';
import PieChart from './components/PieChart'
import MuiTable from '../../../MuiTable';
import Card from '../../../../components/Card'
import Skeleton from './components/Skeleton';

const MainModule = () => {
    const fetch = false;

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
        fetch ? (
            <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ width: '60%' }}>
                    <div style={{ display: 'flex' }}>
                        <Card title='Средний чек' total='1000' res={true} />
                        <Card title='Средний чек' total='1000' res={true} />
                        <Card title='Средний чек' total='1000' res={true} />
                    </div>
                    <MuiTable headers={headers} name="table" data={data} />
                    <div>
                        <PieChart />
                    </div>
                </div>
                <div style={{ width: '40%' }}>
                    <Filter />
                    <div>
                        <Card title='Kaspi' />
                        <Card title='Forte' />
                    </div>
                    <MuiTable headers={headers} name="table" data={data} />
                    <MuiTable headers={headers} name="table" data={data} />
                </div>
            </div>
        ) : (
            <Skeleton />
        )

    );
}

export default MainModule;
